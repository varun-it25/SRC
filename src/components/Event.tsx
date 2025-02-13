import { Button } from '@/components/ui/button'
import { getDateStatus } from '@/lib/getDateStatus'
import { CalendarRange, Clock, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface eventData{
    evendId : string,
    eventBanner : string,
    eventName : string,
    eventDate : string,
    eventTime : string,
    eventVenue : string,
    eventGuest : string,
    guestImg : string
}

export default function Event({ evendId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }: eventData){
    const nav = useNavigate()

    return(
        <div className='p-4 rounded-md border bg-white shadow-md'>
            <div className='w-full mb-4'>
                <div className='w-full h-28 rounded-md'>                    
                    <img src={eventBanner} className='object-cover w-full h-full rounded-md' />
                </div>
                <div className='w-full rounded-md h-28 bg-black relative flex space-x-2 mt-[-7rem] bg-opacity-20 p-2 text-white'>
                    <div className='w-7 h-7 rounded-sm'>
                        <img src={guestImg} className='object-cover w-full h-full rounded-md' />
                    </div>
                    <p className='sm font-semibold'>{eventGuest}</p>
                </div>
            </div>

            <div className='flex space-x-2 text-white font-medium justify-start items-center mb-2'>
                {
                  (getDateStatus(eventDate) === `Upcoming`) && <p className='px-3 sm:px-4 py-1 rounded-full bg-red-400 w-fit text-[0.7rem]'>Upcoming</p>
                }
                {
                  (getDateStatus(eventDate) === `Completed`) && <p className='px-3 sm:px-4 py-1 rounded-full bg-green-400 w-fit text-[0.7rem]'>Completed</p>
                }
                {
                  (getDateStatus(eventDate) === `Today`) && <p className='px-3 sm:px-4 py-1 rounded-full bg-blue-400 w-fit text-[0.7rem]'>Today</p>
                }
            </div>         

            <div className='space-y-3 text-zinc-700 px-2 mb-5'>
                <p className='text-xl font-bold'>{eventName}</p>

                <div className='flex items-center space-x-2 px-1'>
                    <MapPin size={20} />
                    <p className='font-medium text-sm'>{eventVenue}</p>
                </div>

                <div className='flex items-center space-x-2 px-1'>
                    <CalendarRange size={20} />
                    <p className='font-medium text-sm'>{eventDate}</p>
                </div>

                <div className='flex items-center space-x-2 px-1'>
                    <Clock size={20} />
                    <p className='font-medium text-sm'>{eventTime}</p>
                </div>
            </div>

            <Button className='w-full' onClick={() => nav(`/event/${evendId}`)}>Info</Button>
        </div>
    )
}