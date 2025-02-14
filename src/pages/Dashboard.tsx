import Total_Events from "@/components/Total_Events";
import Feedback from "../components/Feedback";
import Upcoming_Events from "@/components/Upcoming_Events";
import All_Buttons from "@/components/All_Buttons";
import Container from "@/components/Right";
import { backendUrl } from "@/data/links";
import { countUpcomingEvents } from "@/lib/upcomingEvents";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [totalEvents, setTotalEvents] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState(0);

  useEffect(() => {
    async function fetchEventsData() {
      const res = await axios.get(`${backendUrl}/events`);
      setTotalEvents(res.data.length);
      setUpcomingEvents(countUpcomingEvents(res.data));
    }
    fetchEventsData();
  }, []);

  return (
    <Container>
      <div className="w-full h-full p-6">
        <div className="w-full mb-7">
          <p className="font-bold text-2xl">SRC Dashboard</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8">
          <All_Buttons
            totalEvents={totalEvents}
            upcomingEvents={upcomingEvents}
          />
          <Total_Events />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8">
          <Feedback />
          <Upcoming_Events />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
