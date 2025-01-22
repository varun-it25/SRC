import { Linkedin, Mail, Phone } from 'lucide-react'

interface memberData {
  name : string,
  designation: string,
  image: string
}

const Member = ({name, designation, image }: memberData) => {
  return (
    <div className='border rounded-md flex w-full flex-col justify-center items-center p-6 shadow-lg'>
        <div className='w-20 h-20 rounded-full border'>
          <img src={image} className='w-full h-full rounded-full object-cover' />
        </div>
        <p className='font-bold text-xl mt-3 text-zinc-800'>{name}</p>
        <p className='text-zinc-400 text-sm font-semibold mt-1'>{designation}</p>
        <div className='flex space-x-4 justify-center items-center text-zinc-500 mt-4'>
            <Phone size={16} className='cursor-pointer' />
            <Linkedin size={16} className='cursor-pointer' />
            <Mail size={16} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Member