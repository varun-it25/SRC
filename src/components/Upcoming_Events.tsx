import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { backendUrl } from "@/data/links";
import axios from "axios";
import { useEffect, useState } from "react";

// Step 1: Define a type for the event object
type EventItem = {
  event_name: string;
  guest_name: string;
  event_date: string;
};

const Upcoming_Events = () => {
  // Step 2: Use the type in the useState hook
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(`${backendUrl}/events/upcoming`);
        setEvents(response.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="rounded-lg bg-white border p-6 shadow-xl">
      <div className="w-full mb-4">
        <p className="font-semibold text-xl text-zinc-700 mt-2 sm:mt-0">Upcoming Events</p>
      </div>

      <Table>
        <TableCaption>A list of your upcoming events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((item, index) => (
            <TableRow key={index} className="cursor-pointer">
              <TableCell className="font-medium">{item.event_name}</TableCell>
              <TableCell>{item.guest_name}</TableCell>
              <TableCell className="text-right">{item.event_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Upcoming_Events;
