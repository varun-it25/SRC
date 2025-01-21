import { Calendar, ChartLineIcon, ImagesIcon, LayoutDashboard, LogOut, Plus, Settings, Users } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="Left flex flex-col py-2 h-full border-r text-black">
            <div className='w-full space-y-[0.67rem] mt-0 text-sm p-4 font-semibold text-zinc-700'>

                <div className="w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer bg-zinc-900 text-white">
                    <div className="flex justify-center items-center p-1"><LayoutDashboard size={20} /></div>
                    <p>Dashboard</p>
                </div>

                <div className="w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer hover:bg-zinc-100">
                    <div className="flex justify-center items-center p-1"><Calendar size={20} /></div>
                    <p>Events</p>
                </div>

                <div className="w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer">
                    <div className="flex justify-center items-center p-1"><Plus size={20} /></div>
                    <p>Create Event</p>
                </div>

                <div className="w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer">
                    <div className="flex justify-center items-center p-1"><ImagesIcon size={20} /></div>
                    <p>Gallery</p>
                </div>

                <div className="w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer">
                    <div className="flex justify-center items-center p-1"><ChartLineIcon size={20} /></div>
                    <p>Analytics</p>
                </div>

                <div className="w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer">
                    <div className="flex justify-center items-center p-1"><Users size={20} /></div>
                    <p>Members</p>
                </div>

                <div className="w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer">
                    <div className="flex justify-center items-center p-1"><Settings size={20} /></div>
                    <p>Settings</p>
                </div>

            </div>


            <div className='flex-1 w-full flex items-end text-sm p-4 text-zinc-600 font-bold'>
                <div className="w-full border-t-2 border-zinc-100 pt-2 px-2 flex space-x-3 items-center cursor-pointer font-semibold">
                    <div className="flex justify-center items-center p-1"><LogOut size={24} /></div>
                    <p>LogOut</p>
                </div>                                                        
            </div>
        </div>
    )
}

export default Sidebar