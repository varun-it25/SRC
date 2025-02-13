import Navbar from "@/components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEvent from "./pages/Create-Event";
import Gallery from "./pages/Gallery";
import UploadMedia from "./pages/Upload-Media";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import Add_Team_Member from "./pages/Add-Team-Member"
import Not_found from "./pages/Not-found";
import EventInfo from "./pages/Event-Info";
import Feedbacks from "./pages/Feedbacks";
import UpdateEvent from "./pages/Update-Event";
import OurTeam from "./pages/Our-Team";

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
            <Route path="/update-event/:id" element={<UpdateEvent />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventInfo />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/add-team-member" element={<Add_Team_Member />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/feedbacks" element={<Feedbacks />} /> */}
            {/* <Route path="/upload-media" element={<UploadMedia />} /> */}
            <Route path="/*" element={<Not_found />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;