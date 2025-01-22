import { CalendarClock, CalendarRange, Plus, UploadCloudIcon } from 'lucide-react'

const All_Buttons = () => {
  return (
    <div className='w-full h-full grid grid-rows-2 grid-cols-2 gap-6'>
        <div className='w-full p-6 h-full rounded-md bg-red-100 flex flex-col justify-start items-start cursor-pointer hover:bg-red-200'>
            <CalendarRange />
            <p className='font text-xl pt-3 flex'>Total<span className='hidden sm:block ml-1'> Events</span></p>
            <p className='font-bold text-2xl pt-[0.1rem]'>23</p>
        </div>
        <div className='w-full p-6 h-full rounded-md bg-teal-100 flex flex-col justify-start items-start cursor-pointer hover:bg-teal-200'>
            <CalendarClock />
            <p className='font text-xl pt-3 flex'>Upcoming <span className='hidden sm:block ml-1'>Events</span></p>
            <p className='font-bold text-2xl pt-2 sm:pt-[0.1rem]'>2</p>
        </div>
        <div className='w-full h-full text-white space-x-2 sm:space-x-3 rounded-md bg-blue-800 justify-center flex items-center p-6 cursor-pointer hover:bg-blue-700'>
            <UploadCloudIcon />
            <p className='font-semibold text-xl flex'>Upload <span className='hidden sm:block ml-1'>Media</span></p>
        </div>
        <div className='w-full h-full text-white space-x-2 sm:space-x-3 rounded-md bg-zinc-800 justify-center flex items-center p-6 cursor-pointer hover:bg-zinc-700'>
            <Plus />
            <p className='font-semibold text-xl flex'>Create <span className='hidden sm:block ml-1'>Event</span></p>
        </div>
    </div>
  )
}

export default All_Buttons