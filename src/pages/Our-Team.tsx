import Member from '@/components/Member'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { backendUrl } from '@/data/links'
import axios from 'axios'
import { UserPlus2Icon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const OurTeam = () => {
  const [members, setMembers]  = useState([])

  useEffect(()=>{
    (async function(){
        const res = await axios.get(`${backendUrl}/members`)
        setMembers(res.data)
    })()    
  },[])

  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Our Team</p>
                <Link to={`/add-team-member`}><Button className='bg-blue-600 hover:bg-blue-500 font-bold'><UserPlus2Icon />Add New Member</Button></Link>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-4'>
                {
                    members.map(({_id, member_image, member_name, member_role, member_email, member_mobile_no}) => {
                        return <Member key={_id} image={member_image} name={member_name} designation={member_role} email={member_email} phone={member_mobile_no} />
                    })
                }
            </div>

        </div>
    </Container>
  )
}

export default OurTeam