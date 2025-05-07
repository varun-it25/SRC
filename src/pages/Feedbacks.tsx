import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Container from '@/components/Right'
import { useEffect, useState } from "react"
import axios from "axios"
import { backendUrl } from "@/data/links"

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(()=>{
    async function fetchFeedbacks(){
        const res = await axios.get(`${backendUrl}/feedbacks/all`)        
        setFeedbacks(res.data)
    }
    fetchFeedbacks()
  },[])

  return (
    <Container>
        <div className='w-full h-full p-6'>

            <div className='w-full mb-7'>
                <p className='font-bold text-2xl'>Feedbacks</p>
            </div>

            <div className="rounded-lg bg-white border p-6 shadow-xl">
            
            <div className='w-full mb-4'>
                <p className='font-semibold text-xl text-zinc-700 mt-2 sm:mt-0'>Feedbacks of Students</p>
            </div>

            <Table>
                <TableCaption>A list of your recent events.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Roll No</TableHead>
                        <TableHead>Mobile No</TableHead>
                        <TableHead className="text-right">Experience</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        feedbacks.map(({ _id, name, rtu_roll_no, mobile_no, experience }) => (
                            <TableRow key={_id} className={`cursor-pointer`}>
                                <TableCell className="font-medium">{name}</TableCell>
                                <TableCell>{rtu_roll_no}</TableCell>
                                <TableCell>{mobile_no}</TableCell>
                                <TableCell className={`text-right font-semibold ${experience === "Very Good" && "text-blue-500"} ${experience === "Good" && "text-purple-500"} ${experience === "Bad" && "text-red-500"} ${experience === "Amazing" && "text-green-500"}`}>{experience}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>

        </div>
    </Container>
  )
}

export default Feedbacks