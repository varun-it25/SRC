import { Button } from '@/components/ui/button'
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
        <div className='p-4 rounded-md border shadow-md'>
            <div className='w-full mb-3'>
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

            <Button className='w-full' onClick={() => nav(`/${evendId}`)}>Info</Button>
        </div>
    )
}