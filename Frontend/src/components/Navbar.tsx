import { useState } from 'react';
import { BellDot, Calendar, ChevronRight, ImagesIcon, LayoutDashboard, LogOut, LogOutIcon, MenuIcon, Moon, Plus, Settings, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Drawer } from '@mui/material';

const Navbar = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setShowDrawer(!showDrawer);
    };

    return (
        <div className="py-3 shadow z-10 sm:px-8 px-6 flex w-full justify-between items-center space-x-7">

            {/* Logo */}
            <div className="flex justify-center items-center space-x-3">
                <div className="w-8 h-8 rounded-full">
                    <img src="https://scontent.fjai2-6.fna.fbcdn.net/v/t39.30808-6/462514268_994329339374011_371810106980174002_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vkmowPOGuSsQ7kNvgFPEpD3&_nc_zt=23&_nc_ht=scontent.fjai2-6.fna&_nc_gid=AZlHLqHH2pHE7K9OOjnPpot&oh=00_AYCjWtsCu-PHY6ylpgdAA_82ZyPtHv78iyz94m6414DIig&oe=67945EBD" className="w-full h-full rounded-full" />
                </div>
                <div className="whitespace-nowrap flex items-center">
                    <p className="text-black font-semibold">SRC</p>
                    <span className="font-semibold text-zinc-500 pl-1 ProfileIcon">- Spiritual Research Cell</span>
                </div>
            </div>

            <Input placeholder="Search something..." className="ProfileIcon" />

            <div className="justify-center ProfileIcon items-center space-x-6 py-1">

                {/* Notifications */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="text-zinc-400 pt-2">
                            <BellDot size={22} />
                            <div className="relative left-[0.78rem] bottom-[1.18rem] w-2 h-2 rounded-full bg-red-500"></div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-16 p-3 space-y-2 w-60">
                        <DropdownMenuLabel>Notification</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer text-zinc-600">
                            <div className="flex justify-between w-full items-center space-x-2">
                                <p>New event Added</p>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Profile Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="w-8 h-8 rounded-full">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFO0HlHI157Wg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718306147454?e=1743033600&v=beta&t=WCsbUhMuCILmN6QQVM_586kTv6bmGPwAGYFvpQ4FfiM" className="w-full h-full rounded-full" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-4 p-3 space-y-2 w-60">
                        <DropdownMenuLabel>
                            <div className="flex space-x-3 items-center">
                                <div className="w-8 h-8 rounded-full">
                                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQFO0HlHI157Wg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718306147454?e=1743033600&v=beta&t=WCsbUhMuCILmN6QQVM_586kTv6bmGPwAGYFvpQ4FfiM" className="w-full h-full rounded-full" />
                                </div>
                                <div className="flex flex-col space-y-[-2px]">
                                    <p className="font-semibold text-zinc-600">Mukesh Agarwal</p>
                                    <p className="font-normal text-zinc-400 text-xs">mukes@mail.com</p>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel className="bg-zinc-100 grid grid-cols-2 text-zinc-500 rounded">
                            <button className="border w-full bg-white rounded flex justify-center items-center p-1"><Sun size={16} /></button>
                            <button className="w-full rounded flex justify-center items-center p-1"><Moon size={16} /></button>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                            <div className="flex justify-center items-center p-1 text-zinc-500"><Settings size={16} /></div>
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            <div className="flex justify-center items-center p-1 text-zinc-500"><LogOutIcon size={16} /></div>
                            Sign Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Hamburger */}
            <div className="HamIcon">
                <Button variant="outline" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </Button>
            </div>

            {/* Drawer */}
            <Drawer anchor="right" open={showDrawer} onClose={handleDrawerToggle}>
                <div className='w-72 p-6 h-full'>
                    <div className='flex flex-col space-y-3 h-full'>

                        <div className='flex justify-between items-center'>
                            <div className="w-12 h-12 rounded-full">
                                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFO0HlHI157Wg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718306147454?e=1743033600&v=beta&t=WCsbUhMuCILmN6QQVM_586kTv6bmGPwAGYFvpQ4FfiM" className="w-full h-full rounded-full" />                                
                            </div>
                            <button onClick={handleDrawerToggle} className="flex justify-center items-center rounded text-zinc-400">
                                <ChevronRight size={30} />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-0">
                            <p className="font-semibold text-zinc-600 text-lg">Mukesh Agarwal</p>
                            <p className="font-normal text-zinc-400 text-sm">mukes@mail.com</p>
                        </div>

                        <DropdownMenuSeparator />

                        <div className='w-full space-y-2 mt-2'>
                            <div className="w-full rounded p-2 flex space-x-3 items-center cursor-pointer bg-zinc-100 text-zinc-600 font-semibold text-lg">
                                <div className="flex justify-center items-center p-1"><LayoutDashboard size={24} /></div>
                                <p>Dashboard</p>
                            </div>
                            <div className="w-full rounded p-2 flex space-x-3 items-center cursor-pointer text-zinc-500 font-semibold">
                                <div className="flex justify-center items-center p-1"><Calendar size={24} /></div>
                                <p>Events</p>
                            </div>
                            <div className="w-full rounded p-2 flex space-x-3 items-center cursor-pointer text-zinc-500 font-semibold">
                                <div className="flex justify-center items-center p-1"><Plus size={24} /></div>
                                <p>Create Event</p>
                            </div>
                            <div className="w-full rounded p-2 flex space-x-3 items-center cursor-pointer text-zinc-500 font-semibold">
                                <div className="flex justify-center items-center p-1"><ImagesIcon size={24} /></div>
                                <p>Gallery</p>
                            </div>
                            <div className="w-full rounded p-2 flex space-x-3 items-center cursor-pointer text-zinc-500 font-semibold">
                                <div className="flex justify-center items-center p-1"><Settings size={24} /></div>
                                <p>Settings</p>
                            </div>
                        </div>

                        <div className='flex-1 w-full flex items-end'>
                            <div className="w-full border-t-2 border-zinc-100 pt-3 rounded p-2 flex space-x-3 items-center cursor-pointer text-zinc-500 font-semibold">
                                <div className="flex justify-center items-center p-1"><LogOut size={24} /></div>
                                <p>LogOut</p>
                            </div>                                                        
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;