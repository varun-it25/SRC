import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUp } from 'lucide-react'
import { useState } from 'react'
import mukesh_sir from '@/assets/mukesh_sir.png'

function Personal(){
    const [name, setName] = useState(`Prof. Mukesh Agarwal`)
    return (
        <div>
            <div className='p-5 bg-white sm:p-6 border rounded-md mb-4'>
                <div className='w-20 shadow-md h-20 rounded-full border flex items-end mb-6'>
                    <img src={mukesh_sir} className='w-full h-full rounded-full object-cover' />
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