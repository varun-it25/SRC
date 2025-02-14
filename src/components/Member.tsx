import { Mail, MessageCircle, MessageSquareMore, Phone, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import axios from 'axios';
import { backendUrl } from '@/data/links';

interface memberData {
  member_id: string,
  name : string,
  designation: string,
  image: string,
  phone: string,
  email: string
}

const Member = ({member_id, name, designation, image, phone, email }: memberData) => {

  async function deleteMember() {
    try{
      await axios.delete(`${backendUrl}/delete-members/${member_id}`)
      console.log(`${member_id} id deleted.`)
    }
    catch(err){
      console.log(`Error in delete ${member_id}.`)

    }
  }

  function watsApp(){
    const url = `https://wa.me/${phone}?text=Hello1`
    window.open(url, '_blank')
  }

  return (
    <div className='border bg-white rounded-md flex w-full flex-col justify-center items-center p-6 shadow-lg'>        
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className='w-full relative top-[-0.8rem] flex justify-end'>
                <div className='cursor-pointer hover:text-red-500 hover:bg-red-100 text-red-400 bg-red-50 rounded-full p-2'>
                  <Trash2 size={15} />
                </div>
              </div>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. This will permanently delete this member and remove your data from our servers.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-500" onClick={deleteMember}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        <div className='w-20 h-20 rounded-full mt-[-1.4rem] border'>
          <img src={image} className='w-full h-full rounded-full object-cover' />
        </div>

        <p className='font-bold text-xl mt-3 text-zinc-800'>{name}</p>
        <p className='text-zinc-400 text-sm font-semibold mt-1'>{designation}</p>
        <div className='flex space-x-5 justify-center items-center text-zinc-500 mt-4'>
            <Link className='bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-600 p-2 rounded-full' to={`tel:${phone}`}><Phone size={16} className='cursor-pointer' /></Link>
            <Link className='bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-600 p-2 rounded-full' to={`mailto:${email}`}><Mail size={16} className='cursor-pointer' /></Link>
            <button className='bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-600 p-2 rounded-full' onClick={watsApp}><MessageSquareMore size={17} className='cursor-pointer' /></button>
        </div>
    </div>
  )
}

export default Member