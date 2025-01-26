import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { ArrowLeft, LayoutDashboardIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Not_found = () => {
  const nav = useNavigate()

  function back(){
    nav(-1);  
  }

  return (
    <Container>
        <div className='w-full flex-col h-full flex justify-center items-center'>
            <img src='https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png' className='w-[32rem]' />
            <div className='flex mt-12 space-x-6'>
                <Button variant={`destructive`} onClick={back}><ArrowLeft />Go Back</Button>
                <Link to={`/`}><Button><LayoutDashboardIcon />Dashboard</Button></Link>
            </div>
        </div>
    </Container>

  )
}

export default Not_found