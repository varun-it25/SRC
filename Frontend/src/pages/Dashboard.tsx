import Total_Events from '@/components/Total_Events'
import Feedback from '../components/Feedback'
import Recent_Events from '@/components/Recent_Events'
import All_Buttons from '@/components/All_Buttons'
import Container from '@/components/Right'

const Dashboard = () => {
  return (
    <Container>
        <div className='w-full h-full p-6'>

            <div className='w-full mb-6'>
                <p className='font-bold text-2xl'>SRC Dashboard</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8">
                <All_Buttons />
                <Total_Events />
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8'>
                <Feedback />
                <Recent_Events />
            </div>            

        </div>
    </Container>
  )
}

export default Dashboard