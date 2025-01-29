import '@/App.css'
import { Button } from '@/components/ui/button';
import { Calendar, Clock, EditIcon, IdCard, LucideTableOfContents, Mail, MapPin, Phone, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Container from '@/components/Right'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface resData {
    _id: string,
    event_banner: string,
    event_name: string,
    event_venue: string,
    event_description: string,
    event_date: string,
    event_start_time: string,
    event_end_time: string,
    guest_image: string,
    guest_name: string,
    guest_email: string,
    guest_mobile_no: string
}

const EventInfo = () => {
  const { id } = useParams()
  const [res, setRes] = useState<resData>()

  useEffect(()=>{
    async function fetchData(){
        const response = await axios.get(`https://src-server.onrender.com/events/${id}`)
        setRes(response.data)
    }
    fetchData()
  })

  return (
    <Container>
            <div className='w-full h-fit p-6'>

            <div className='w-full h-32 sm:h-40 mb-5 sm:mb-6 rounded-lg sm:rounded-xl'>
                <img src={res?.event_banner} className='w-full h-full object-cover rounded-lg sm:rounded-xl' />
            </div>
            <div className='border-zinc-400 border w-full rounded-lg p-6 sm:p-10'>
                <div className='flex justify-between items-center font-medium mb-4'>
                    <p className='px-4 py-1 rounded-full bg-blue-300 w-fit text-sm'>Upcoming</p>
                </div>
                <p className='text-3xl font-semibold mb-6 sm:mb-5'>{res?.event_name}</p>
                <p className='text-zinc-600 mb-4'>{res?.event_description}</p>

                <div className='p-2 sm:p-6 space-y-7'>
                    <div className='font-medium flex text-zinc-800 items-center space-x-4'>
                        <img src={res?.guest_image} className='aspect-square w-11 rounded-full' />
                        <p className='text-xl font-medium'>{res?.guest_name}</p>
                    </div>
                    
                    <div className='px-1 flex flex-col items-start space-y-6'>
                        <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                            <p className='font-medium flex text-zinc-600 items-center space-x-3'><MapPin size={24} /><span>{res?.event_venue}</span></p>
                        </div>
                        <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                           <p className='font-medium flex text-zinc-600 items-center space-x-3'><Calendar size={24} /><span>{res?.event_date}</span></p>
                        </div>

                        <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                           <p className='font-medium flex text-zinc-600 items-center space-x-3'><Clock size={24} /><span>{`${res?.event_start_time} to ${res?.event_end_time}`}</span></p>
                        </div>

                        <div className='flex space-x-6'>
                          <Link to={`/`} className='text-blue-600 font-medium hover:underline'>Participation</Link>
                          <Link to={`/`} className='text-blue-600 font-medium hover:underline'>Registration</Link>
                        </div>
                    </div>

                </div>
            </div>
      </div>
    </Container>
  )
}

export default EventInfo;