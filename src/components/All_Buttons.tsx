import { Plus, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

interface AllButtonsProps {
  upcomingEvents: number;
  totalEvents: number;
}

const All_Buttons: React.FC<AllButtonsProps> = ({ upcomingEvents, totalEvents }) => {
  return (
    <div className='w-full h-full grid grid-rows-2 grid-cols-2 gap-4 sm:gap-6'>
      <div className='w-full h-full space-x-2 sm:space-x-3 rounded-md bg-red-100 justify-center flex items-center p-6 hover:bg-red-200 text-red-500'>
        <p className='text-2xl font-bold'>{upcomingEvents}</p>
        <p className='font-semibold text-xl flex'>
          <span className='hidden sm:block'>Coming Events</span>
          <span className='block sm:hidden'>Coming</span>
        </p>
      </div>

      <Link to={`/events`} className='w-full h-full text-white space-x-2 sm:space-x-3 rounded-md bg-teal-700 justify-center flex items-center p-6 cursor-pointer hover:bg-teal-600'>
        <p className='text-2xl font-bold'>{totalEvents}</p>
        <p className='font-semibold text-xl flex'>
          <span className='hidden sm:block'>Total Events</span>
          <span className='block sm:hidden'>Events</span>
        </p>
      </Link>

      <Link to={`/our-team`} className='w-full h-full text-white space-x-3 sm:space-x-4 rounded-md bg-blue-800 justify-center flex items-center p-6 cursor-pointer hover:bg-blue-700'>
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
