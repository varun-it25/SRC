import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

function Account(){
    const [email, setEmail] = useState(`mukeshagarwal@jecrc.ac.in`)
    const [password, setPassword] = useState(`mukesh@123`)

    return (
        <div>
            <div className='p-5 sm:p-6 border rounded-md mb-4'>
                <div className='space-y-6'>
                    <div className="space-y-2">
                        <p className="font-semibold">Email</p>
                        <Input type='email' value={email} placeholder='Write your email here' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold">Password</p>
                        <Input value={password} placeholder='Write your name here' onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
            </div>

            <Button>Save Changes</Button>
        </div>
    )
}

export default Account