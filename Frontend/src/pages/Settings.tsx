import Event from '@/components/Event'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { eventData } from '@/data/eventCard'
import { ArrowUp, Image, Plus } from 'lucide-react'
import { useState } from 'react'

const Settings = () => {
  const [name, setName] = useState(`Mukesh Agarwal`)
  const [email, setEmail] = useState(`mukeshagarwal@jecrc.ac.in`)
  const [password, setPassword] = useState(`mukesh@123`)

  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-6 sm:mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Settings</p>
            </div>

            <div className='w-full p-0 sm:px-3'>
                <div className='w-full flex space-x-6 mb-4 text-sm'>
                    <p className='border-blue-500 border-b-2 font-bold text-zinc-700 px-1 pb-1 cursor-pointer'>Account</p>
                    <p className='font-semibold text-zinc-500 px-1 pb-1 cursor-pointer'>Theme</p>
                    <p className='font-semibold text-zinc-500 px-1 pb-1 cursor-pointer'>Manage Roles</p>
                </div>

                <div className='p-5 sm:p-6 border rounded-md mb-4'>
                    <div className='w-20 shadow-md h-20 rounded-full border flex items-end mb-6'>
                        <img src={`https://media.licdn.com/dms/image/v2/D4D03AQFO0HlHI157Wg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718306147454?e=1743033600&v=beta&t=WCsbUhMuCILmN6QQVM_586kTv6bmGPwAGYFvpQ4FfiM`} className='w-full h-full rounded-full object-cover' />
                        <div className='p-1 bg-white cursor-pointer shadow-lg relative ml-[-1.5rem] mb-1 rounded-full text-zinc-600 border'><ArrowUp size={18} /></div>
                    </div>
                    <div className='px-3 space-y-5'>
                        <div className="space-y-2">
                            <p className="font-semibold text-xs">Name</p>
                            <Input value={name} />
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-xs">Email</p>
                            <Input value={email} />
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-xs">Password</p>
                            <Input value={password} />
                        </div>
                    </div>
                </div>

                <Button>Save Changes</Button>
            </div>

        </div>
    </Container>
  )
}

export default Settings