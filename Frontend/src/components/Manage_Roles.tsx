import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { roles } from '@/data/rolesData'

function Manage_Roles(){
    return (
        <div className='p-5 sm:p-6 border rounded-md'>
            <div className='w-full mb-5 flex items-center justify-between'>
                <p className='font-semibold text-xl text-zinc-700'>All Members</p>
                <div className='flex space-x-3'>
                    <Button>Save<span className='hidden sm:block ml-[-3px]'>Changes</span></Button>
                    <Button className='bg-blue-600 hover:bg-blue-500'><Plus /> <span className='hidden sm:block ml-[-3px]'>Add</span></Button>
                </div>
            </div>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        roles.map(({ id, name, role }) => {
                            return (
                                <TableRow key={id} className='cursor-pointer'>
                                    <TableCell className="font-medium whitespace-nowrap">{name}</TableCell>
                                    <TableCell>
                                        <Select>
                                            <SelectTrigger className="w-[180px]"><SelectValue placeholder={role} /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">Super Admin</SelectItem>  
                                                <SelectItem value="dark">Admin</SelectItem>
                                                <SelectItem value="system">Moderator</SelectItem>
                                                <SelectItem value="system">Editor</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell className="text-right"><Button className='bg-red-600 hover:bg-red-500'>Del</Button></TableCell>
                                </TableRow>
                            )
                        })    
                    }
                </TableBody>
            </Table>                
        </div>
    )
}

export default Manage_Roles