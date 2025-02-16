import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

function Personal(){
    const [name, setName] = useState(`Prof. Mukesh Agarwal`)
    return (
        <div>
            <div className='p-5 bg-white sm:p-6 border rounded-md mb-4'>
                <div className='w-20 shadow-md h-20 rounded-full border flex items-end mb-6'>
                    <img src={`https://media.licdn.com/dms/image/v2/D4D03AQFO0HlHI157Wg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718306147454?e=1743033600&v=beta&t=WCsbUhMuCILmN6QQVM_586kTv6bmGPwAGYFvpQ4FfiM`} className='w-full h-full rounded-full object-cover' />
                    <div className='p-1 bg-white cursor-pointer shadow-lg relative ml-[-1.5rem] mb-1 rounded-full text-zinc-600 border'><ArrowUp size={18} /></div>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold">Name</p>
                    <Input value={name} placeholder='Write your name here' onChange={e => setName(e.target.value)} />
                </div>
            </div>

            <Button>Save Changes</Button>
        </div>
    )
}

export default Personal