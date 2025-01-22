import { Link, useLocation } from "react-router-dom";
import { Calendar, ImagesIcon, LayoutDashboard, LogOut, Plus, Settings, Users } from "lucide-react";

const NavItem = ({ to, icon, label, activePath }) => {
  const isActive = activePath === to;

  return (
    <Link to={to} className={`w-full rounded py-1 px-2 flex space-x-3 items-center cursor-pointer transition-colors duration-300 ${isActive ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100 text-zinc-700'} ${isActive ? 'font-semibold' : 'font-medium'}`}>
      <div className="flex justify-center items-center p-1">{icon}</div>
      <p>{label}</p>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="Left flex flex-col py-2 h-full border-r text-black">
      <div className="w-full space-y-[0.67rem] mt-0 text-sm px-3 py-4 font-semibold text-zinc-700">

        {/* Sidebar Navigation Items */}
        <NavItem to="/" label="Dashboard" icon={<LayoutDashboard size={20} />} activePath={location.pathname} />
        <NavItem to="/events" label="Events" icon={<Calendar size={20} />} activePath={location.pathname} />
        <NavItem to="/create-event" label="Create Event" icon={<Plus size={20} />} activePath={location.pathname} />
        <NavItem to="/gallery" label="Gallery" icon={<ImagesIcon size={20} />} activePath={location.pathname} />
        <NavItem to="/members" label="Members" icon={<Users size={20} />} activePath={location.pathname} />
        <NavItem to="/settings" label="Settings" icon={<Settings size={20} />} activePath={location.pathname} />

      </div>

      {/* LogOut Section */}
      <div className='flex-1 w-full flex items-end text-sm p-4 text-zinc-600 font-bold'>
        <div className="w-full border-t-2 border-zinc-100 pt-2 px-2 flex space-x-3 items-center cursor-pointer font-semibold">
          <div className="flex justify-center items-center p-1"><LogOut size={24} /></div>
          <p>LogOut</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;