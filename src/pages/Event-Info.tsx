import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import "@/App.css";
import { Calendar, Clock, Delete, Edit, MapPin, Upload, Users } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "@/components/Right";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "@/data/links";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface ResData {
  _id: string;
  event_banner: string;
  event_name: string;
  event_venue: string;
  event_description: string;
  event_date: string;
  event_start_time: string;
  event_end_time: string;
  guest_image: string;
  guest_name: string;
  guest_email: string;
  guest_mobile_no: string;
}

const EventInfo = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [res, setRes] = useState<ResData | null>(null);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  const exportFeedbacks = async () => {
    const url = `${backendUrl}/download/feedbacks/excel`;
    await axios.post(`${backendUrl}/create-excel/feedbacks`, { data: feedbacks });
    window.open(url, "_blank");
  };

  const exportRegisters = async () => {
    const url = `${backendUrl}/download/registers/excel`;
    await axios.post(`${backendUrl}/create-excel/registers`, { data: registrations });
    window.open(url, "_blank");
  };

  const fetchEventData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/event/${id}`);
      setRes(response.data);
    } catch (error) {
      console.error("Error fetching event data", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegistrationData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/registrations/event/${id}`);
      setRegistrations(response.data);
      console.log({registrations: response.data})
    } catch (error) {
      console.error("Error fetching registrations", error);
    }
  };
  
  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(`${backendUrl}/feedbacks/event/${id}`);
      console.log({feedbacks: response})
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks", error);
    }
  };

  const deleteEvent = async () => {
    try {
      await axios.delete(`${backendUrl}/event/delete/${id}`);
      nav(`/events`);
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  useEffect(() => {
    fetchEventData();
    fetchFeedbacks();
    fetchRegistrationData();
  }, [id]);

  return (
    <Container>
      <div className="w-full h-fit">
        {isLoading ? (
          <div className="flex flex-col">
            <div className="border w-full h-40 sm:h-56 z-[0]">
              <div className="w-full h-full object-cover animate-pulse bg-zinc-300" />
            </div>
            <div className="w-full flex-1 bg-white relative top-[-3rem] border-t rounded-t-[3rem] px-6 sm:px-16 flex justify-center items-start flex-col">
              <div className="w-full flex justify-center items-end relative top-[-2rem]">
                <div className="w-20 aspect-square bg-white animate-pulse rounded-full border"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="border w-full h-40 sm:h-56 z-[0]">
              <img src={res?.event_banner} className="w-full h-full object-cover" />
            </div>
            <div className="w-full bg-white border-t grid grid-cols-3 space-y-1 px-6 sm:px-16 rounded-t-[3rem] relative top-[-3rem]">
              <div className="flex space-x-3 text-white font-medium justify-start items-center">
                <Link to={`/update-event/${id}`}>
                  <button className="p-2 aspect-square rounded-full bg-blue-400 w-fit text-sm flex justify-center items-center">
                    <Edit size={19} />
                  </button>
                </Link>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="p-2 rounded-full bg-red-400 w-fit aspect-square text-sm flex justify-center items-center">
                      <Delete size={19} className="relative left-[-1px]" />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this event and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-red-600 hover:bg-red-500" onClick={deleteEvent}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <div className="flex w-full flex-col justify-center items-center">
                <div className="w-20 relative top-[-1.5rem] bg-white rounded-full">
                  <img className="aspect-square rounded-full object-cover border border-zinc-300" src={res?.guest_image} />
                </div>
                <p className="text-lg whitespace-nowrap font-medium relative top-[-0.8rem]">{res?.guest_name}</p>
              </div>

              <div className="flex space-x-2 justify-end items-center font-bold text-zinc-500">
                <Users />
                <p>{registrations.length}</p>
              </div>
            </div>

            <div className="px-6 sm:px-16 pb-12 mt-[-1.5rem] space-y-5 flex flex-col justify-center items-start">
              <p className="text-3xl font-bold">{res?.event_name}</p>
              <p className="text">{res?.event_description}</p>

              <div className="pt-3 pb-4 sm:pt-1 flex flex-col sm:flex-row items-start space-y-5 sm:space-y-0 space-x-0 sm:space-x-10">
                <div className="flex-col sm:flex-row flex items-center text-sm justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6">
                  <p className="font-medium flex text-zinc-600 items-center space-x-2">
                    <MapPin size={20} className="text-red-300" />
                    <span>{res?.event_venue}</span>
                  </p>
                </div>

                <div className="flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6">
                  <p className="font-medium flex text-zinc-600 items-center text-sm space-x-2">
                    <Calendar size={18} className="text-purple-300" />
                    <span>{res?.event_date}</span>
                  </p>
                </div>

                <div className="flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6">
                  <p className="font-medium flex text-zinc-600 items-center text-sm space-x-2">
                    <Clock size={18} className="text-yellow-400" />
                    <span>{`${res?.event_start_time} to ${res?.event_end_time}`}</span>
                  </p>
                </div>
              </div>

              <div className="w-full space-y-4 text-lg font-medium bg-sky-50 p-5 sm:p-8 rounded-xl border border-sky-200">
                <div className={`flex justify-between items-center w-full`}>
                  <p className="font-semibold">Registrations</p>
                  <Button disabled={registrations.length === 0} onClick={exportRegisters} variant="ghost" className="bg-sky-600 hover:bg-sky-500 text-white hover:text-white">
                    <Upload /> Export Excel
                  </Button>
                </div>
                <div className="border rounded-lg p-1 sm:p-2 bg-white">
                  <Table>
                    {registrations.length === 0 ? (
                      <TableCaption className="pb-4">There are no registrations.</TableCaption>
                    ) : (
                      <TableCaption className="pb-4">A list of your registrations.</TableCaption>
                    )}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="whitespace-nowrap">Name</TableHead>
                        <TableHead className="whitespace-nowrap">Roll No</TableHead>
                        <TableHead className="whitespace-nowrap">College Email</TableHead>
                        <TableHead className="whitespace-nowrap">Personal Email</TableHead>
                        <TableHead className="whitespace-nowrap">Mobile No</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registrations.map(({ _id, name, college_email, personal_email, rtu_roll_no, mobile_no }) => (
                        <TableRow key={_id} className="cursor-pointer">
                          <TableCell className="font-medium whitespace-nowrap">{name}</TableCell>
                          <TableCell className="whitespace-nowrap">{rtu_roll_no}</TableCell>
                          <TableCell className="whitespace-nowrap">{college_email}</TableCell>
                          <TableCell className="whitespace-nowrap">{personal_email}</TableCell>
                          <TableCell className="whitespace-nowrap">{mobile_no}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="w-full space-y-4 text-lg font-medium bg-green-50 p-5 sm:p-8 rounded-xl border border-green-200">
                <div className={`flex justify-between items-center w-full`}>
                  <p className="font-semibold">Feedbacks</p>
                  <Button disabled={feedbacks.length === 0} onClick={exportFeedbacks} variant="ghost" className="bg-green-600 hover:bg-green-500 text-white hover:text-white">
                    <Upload /> Export Excel
                  </Button>
                </div>
                <div className="border rounded-lg p-1 sm:p-2 bg-white">
                  <Table>
                    {feedbacks.length === 0 ? (
                      <TableCaption className="pb-4">There are no feedbacks.</TableCaption>
                    ) : (
                      <TableCaption className="pb-4">A list of your feedbacks</TableCaption>
                    )}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="whitespace-nowrap">Name</TableHead>
                        <TableHead className="whitespace-nowrap">Roll No</TableHead>
                        <TableHead className="whitespace-nowrap">Mobile No</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Experience</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feedbacks.map(({ _id, name, rtu_roll_no, mobile_no, experience }) => (
                        <TableRow key={_id} className="cursor-pointer">
                          <TableCell className="whitespace-nowrap font-medium">{name}</TableCell>
                          <TableCell className="whitespace-nowrap">{rtu_roll_no}</TableCell>
                          <TableCell className="whitespace-nowrap">{mobile_no}</TableCell>
                          <TableCell className={`whitespace-nowrap text-right font-semibold ${experience === "Very Good" && "text-blue-500"} ${experience === "Good" && "text-purple-500"} ${experience === "Bad" && "text-red-500"} ${experience === "Amazing" && "text-green-500"}`}>{experience}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default EventInfo;