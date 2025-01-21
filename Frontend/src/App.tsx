import Navbar from "@/components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <div className="w-full flex flex-1 overflow-auto">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;