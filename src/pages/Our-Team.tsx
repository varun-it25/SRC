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
    async function callMember(){
        const res = await axios.get(`${backendUrl}/members`)
        setMembers(res.data)
    }
    callMember()
  },[members])

  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Our Team</p>
                <Link to={`/add-team-member`}><Button className='bg-blue-600 hover:bg-blue-500 font-bold flex'><UserPlus2Icon />Add New<p className="hidden sm:block ml-[-4px]">Members</p></Button></Link>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-4'>
                <Member key={`67b2c0cc5991d3576fd72d1b`} member_id={`67b2c0cc5991d3576fd72d1b`} image={`https://res.cloudinary.com/dimqol16x/image/upload/v1739768008/gzctvasaaullsnozcpre.jpg`} name={`Mr. Varun Kangotra`} designation={`Web Developer`} email={`varunkangotra.it25@jecrc.ac.in`} phone={`+919257307752`} />
                {
                    members.map(({_id, member_image, member_name, member_role, member_email, member_mobile_no}) => {
                        return <Member key={_id} member_id={_id} image={member_image} name={member_name} designation={member_role} email={member_email} phone={member_mobile_no} />
                    })
                }
            </div>

        </div>
    </Container>
  )
}

export default OurTeam