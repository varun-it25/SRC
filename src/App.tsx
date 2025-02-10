import Navbar from "@/components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEvent from "./pages/Create-Event";
import Gallery from "./pages/Gallery";
import UploadMedia from "./pages/Upload-Media";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import Add_Member from "./pages/Add-Member";
import EventInfo from "./pages/Event-Info";
import Not_found from "./pages/Not-found";
import NewEventInfo from "./pages/NewEventInfo";
import Feedbacks from "./pages/Feedbacks";

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
            <Route path="/event/:id" element={<NewEventInfo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/members" element={<Members />} />
            <Route path="/add-member" element={<Add_Member />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
            <Route path="/upload-media" element={<UploadMedia />} />
            <Route path="/*" element={<Not_found />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;