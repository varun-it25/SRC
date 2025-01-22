import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

interface memberData {
  name : string,
  designation: string,
  image: string,
  phone: string,
  email: string
}

const Member = ({name, designation, image, phone, email }: memberData) => {
  return (
    <div className='border rounded-md flex w-full flex-col justify-center items-center p-6 shadow-lg'>
        <div className='w-20 h-20 rounded-full border'>
          <img src={image} className='w-full h-full rounded-full object-cover' />
        </div>
        <p className='font-bold text-xl mt-3 text-zinc-800'>{name}</p>
        <p className='text-zinc-400 text-sm font-semibold mt-1'>{designation}</p>
        <div className='flex space-x-5 justify-center items-center text-zinc-500 mt-4'>
            <Link to={`tel:${phone}`}><Phone size={16} className='cursor-pointer' /></Link>
            <Link to={`mailto:${email}`}><Mail size={16} className='cursor-pointer' /></Link>
        </div>
    </div>
  )
}

export default Member