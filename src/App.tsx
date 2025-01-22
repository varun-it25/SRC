import Navbar from "@/components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEvent from "./pages/Create-Event";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="w-full flex flex-1 overflow-auto">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/members" element={<Members />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;