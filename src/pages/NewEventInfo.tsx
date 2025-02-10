import '@/App.css'
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Container from '@/components/Right'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getDateStatus } from '@/lib/getDateStatus';
import { backendUrl } from '@/data/links';

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

const NewEventInfo = () => {
  const { id } = useParams()
  const [res, setRes] = useState<resData>()
  const [feedbacks, setFeedbacks] = useState<number>(0)

  async function fetchEventData(){
      const response = await axios.get(`${backendUrl}/event/${id}`)
      setRes(response.data)
  }

  async function fetchFeedbacks(){
      const response = await axios.get(`${backendUrl}/feedbacks/event/${id}`)
      setFeedbacks(response.data.length)
  }

  useEffect(()=>{
    fetchEventData()
    fetchFeedbacks()
  },[])

  return (
    <Container>
        <div className='w-full h-fit'>
            <div className='border w-full h-40 sm:h-56 z-[0]'>
                <img src={res?.event_banner} className='w-full h-full object-cover' />
            </div>
            <div className='w-full bg-white border-t grid grid-cols-3 space-y-1 px-6 sm:px-16 rounded-t-[3rem] relative top-[-3rem]'>
                <div className='flex space-x-2 text-white font-medium justify-start items-center'>
                    {
                      (getDateStatus(res?.event_date) === `Upcoming`) && <p className='px-3 sm:px-6 py-1 rounded-full bg-red-400 w-fit text-sm'>Upcoming</p>
                    }
                    {
                      (getDateStatus(res?.event_date) === `Completed`) && <p className='px-3 sm:px-6 py-1 rounded-full bg-green-400 w-fit text-sm'>Completed</p>
                    }
                    {
                      (getDateStatus(res?.event_date) === `Today`) && <p className='px-3 sm:px-6 py-1 rounded-full bg-blue-400 w-fit text-sm'>Today</p>
                    }
                </div>

                <div className='flex w-full flex-col justify-center items-center'>
                    <div className='w-20 relative top-[-1.5rem] bg-white rounded-full'>
                        <img className='aspect-square rounded-full object-cover border border-zinc-300' src={res?.guest_image} />
                    </div>
                    <p className='text-lg font-medium relative top-[-0.8rem]'>{res?.guest_name}</p>
                </div>

                <div className='flex space-x-2 justify-end items-center font-bold text-zinc-500'>
                    <Users />
                    <p>{feedbacks}</p>
                </div>
            </div>


            <div className='px-6 sm:px-16 pb-12 mt-[-1.5rem] space-y-5 flex flex-col justify-center items-start'>
                <p className='text-3xl font-bold'>{res?.event_name}</p>

                <p className='text'>{res?.event_description}</p>

                <div className='pt-3 sm:pt-1 flex flex-col sm:flex-row items-start space-y-5 sm:space-y-0 space-x-0 sm:space-x-10'>
                    <div className='flex-col sm:flex-row flex items-center text-sm justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                       <p className='font-medium flex text-zinc-600 items-center space-x-2'><MapPin size={20} className='text-red-300' /><span>{res?.event_venue}</span></p>
                    </div>

                    <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                        <p className='font-medium flex text-zinc-600 items-center text-sm space-x-2'><Calendar size={18} className='text-purple-300'  /><span>{res?.event_date}</span></p>
                    </div>

                    <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                      <p className='font-medium flex text-zinc-600 items-center text-sm space-x-2'><Clock size={18} className='text-yellow-400'  /><span>{`${res?.event_start_time} to ${res?.event_end_time}`}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default NewEventInfo;