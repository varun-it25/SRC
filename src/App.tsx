// import UploadMedia from "./pages/Upload-Media";
// import Feedbacks from "./pages/Feedbacks";
{/* <Route path="/feedbacks" element={<Feedbacks />} /> */}
{/* <Route path="/upload-media" element={<UploadMedia />} /> */}

import Gallery from "./pages/Gallery";
import Navbar from "@/components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEvent from "./pages/Create-Event";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import Add_Team_Member from "./pages/Add-Team-Member"
import Not_found from "./pages/Not-found";
import EventInfo from "./pages/Event-Info";
import UpdateEvent from "./pages/Update-Event";
import OurTeam from "./pages/Our-Team";
import useAuth from "./hooks/useAuth";
import Loader from "./components/Loader";
import Login from "./components/Login";

const App = () => {
  const { session, process } = useAuth();
  
  if (process) { return (<Loader />) }
  else if (!session) { return (<Login />) }
  
  else {
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
            <Route path="/our-team" element={<OurTeam />} />
             <Route path="/gallery" element={<Gallery />} />
            <Route path="/add-team-member" element={<Add_Team_Member />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element={<Not_found />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    );
  }
};

export default App;