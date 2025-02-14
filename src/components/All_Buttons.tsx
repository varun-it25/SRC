import { CalendarClock, CalendarRange, Plus, UploadCloudIcon, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const All_Buttons = ({upcomingEvents, totalEvents}) => {
  return (
    <div className='w-full h-full grid grid-rows-2 grid-cols-2 gap-4 sm:gap-6'>
        {/* <div className='w-full p-6 h-full rounded-md bg-red-200 flex flex-col justify-start items-start cursor-pointer hover:bg-red-300'>
            <CalendarClock />
            <p className='font text-xl pt-3 flex'>Upcoming<span className='hidden sm:block ml-1'> Events</span></p>
            <p className='font-bold text-2xl pt-[0.1rem]'>{upcomingEvents}</p>
        </div> */}
        {/* <div className='w-full p-6 h-full rounded-md bg-teal-200 flex flex-col justify-start items-start cursor-pointer hover:bg-teal-300'>
            <CalendarRange />
            <p className='font text-xl pt-3 flex'>Total <span className='hidden sm:block ml-1'>Events</span></p>
            <p className='font-bold text-2xl pt-2 sm:pt-[0.1rem]'>{totalEvents}</p>
        </div> */}
        {/* <Link to={`/events`}  className='w-full h-full text-white space-x-2 sm:space-x-3 rounded-md bg-red-500 justify-center flex items-center p-6 cursor-pointer hover:bg-red-600'>
            <p className='text-xl font-bold'>{upcomingEvents}</p>
            <p className='font-semibold text-xl flex'>Upcoming <span className='hidden sm:block mx-1'>Events</span></p>
        </Link> */}
        <div className='w-full h-full space-x-2 sm:space-x-3 rounded-md bg-red-100 justify-center flex items-center p-6 hover:bg-red-200 text-red-500'>
            <p className='text-2xl font-bold'>{upcomingEvents}</p>
            <p className='font-semibold text-xl flex'>
                <span className='hidden sm:block'>Coming Events</span>
                <span className='block sm:hidden'>Coming</span>
            </p>
        </div>
        <Link to={`/events`}  className='w-full h-full text-white space-x-2 sm:space-x-3 rounded-md bg-teal-700 justify-center flex items-center p-6 cursor-pointer hover:bg-teal-600'>
            <p className='text-2xl font-bold'>{totalEvents}</p>
            <p className='font-semibold text-xl flex'>
                <span className='hidden sm:block'>Total Events</span>
                <span className='block sm:hidden'>Events</span>
            </p>
        </Link>
        {/* <Link to={`/events`}  className='w-full h-full text-white space-x-2 sm:space-x-3 rounded-md bg-teal-600 justify-center flex items-center p-6 cursor-pointer hover:bg-teal-700'>
            <p className='text-xl font-bold'>{totalEvents}</p>
            <p className='font-semibold text-xl flex'>
                <span className='hidden sm:block'>Our Team</span>
                <span className='block sm:hidden'>Team</span>
            </p>
        </Link> */}
        <Link to={`/our-team`}  className='w-full h-full text-white space-x-3 sm:space-x-4 rounded-md bg-blue-800 justify-center flex items-center p-6 cursor-pointer hover:bg-blue-700'>
            <Users />
            <p className='font-semibold text-xl flex'>
                <span className='hidden sm:block'>Our Team</span>
                <span className='block sm:hidden'>Team</span>
            </p>
        </Link>
        <Link to={`/create-event`} className='w-full h-full text-white space-x-2 sm:space-x-3 rounded-md bg-zinc-800 justify-center flex items-center p-6 cursor-pointer hover:bg-zinc-700'>
            <Plus />
            <p className='font-semibold text-xl flex'>
                <span className='hidden sm:block'>Create Event</span>
                <span className='block sm:hidden'>Create</span>
            </p>
        </Link>
    </div>
  )
}

export default All_Buttons