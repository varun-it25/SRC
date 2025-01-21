import Navbar from "@/components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEvent from "./pages/Create-Event";

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
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;