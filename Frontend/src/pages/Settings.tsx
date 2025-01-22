import Container from '@/components/Right'
import { useState } from 'react'
import Manage_Roles from '@/components/Manage_Roles'
import Account from '@/components/Account'
import Personal from '@/components/Personal'

const Settings = () => {
  const [isActive, setActive] = useState(`Personal`)

  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-6 sm:mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Settings</p>
            </div>

            <div className='w-full p-0 sm:px-3'>
                <div className='w-full flex space-x-6 mb-4 text-sm'>
                    <p className={`px-1 pb-1 cursor-pointer ${(isActive === `Personal`) ?`text-zinc-700 font-bold border-blue-500 border-b-2 ` :`text-zinc-500 font-semibold`}`} onClick={() => isActive!==`Personal` && setActive(`Personal`)}>Personal</p>
                    <p className={`px-1 pb-1 cursor-pointer ${(isActive === `Account`) ?`text-zinc-700 font-bold border-blue-500 border-b-2 ` :`text-zinc-500 font-semibold`}`} onClick={() => isActive!==`Account` && setActive(`Account`)}>Account</p>
                    <p className={`px-1 pb-1 cursor-pointer ${(isActive === `Manage Roles`) ?`text-zinc-700 font-bold border-blue-500 border-b-2 ` :`text-zinc-500 font-semibold`}`} onClick={() => isActive!==`Manage Roles` && setActive(`Manage Roles`)}>Manage Roles</p>
                </div>
                { isActive === `Personal` && <Personal /> }
                { isActive === `Account` && <Account /> }
                { isActive === `Manage Roles` && <Manage_Roles /> }
            </div>

        </div>
    </Container>
  )
}

export default Settings