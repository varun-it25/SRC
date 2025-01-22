import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { recentEvents } from "@/data/recentEvents"

const Recent_Events = () => {
  return (
        <div className="rounded-lg bg-white border p-6 shadow-xl">
            
            <div className='w-full mb-4'>
                <p className='font-semibold text-xl text-zinc-700 mt-2 sm:mt-0'>Recent Events</p>
            </div>

            <Table>
                <TableCaption>A list of your recent events.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Event</TableHead>
                        <TableHead>Guest</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Participants</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        recentEvents.map(item => (
                            <TableRow className='cursor-pointer'>
                                <TableCell className="font-medium">{item.Event}</TableCell>
                                <TableCell>{item.Guest}</TableCell>
                                <TableCell>{item.Date}</TableCell>
                                <TableCell className="text-right">{item.Participants}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
  )
}

export default Recent_Events