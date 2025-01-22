import Event from '@/components/Event'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { eventData } from '@/data/eventCard'
import { Plus } from 'lucide-react'

const Events = () => {
  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Events</p>
                <Button className='bg-blue-600 hover:bg-blue-500 font-bold'><Plus />Create Event</Button>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
              {
                eventData.map(({ evendId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }) => {
                    return <Event key={evendId} evendId={evendId} eventName={eventName} eventBanner={eventBanner}  guestImg={guestImg} eventDate={eventDate} eventGuest={eventGuest} eventTime={eventTime} eventVenue={eventVenue} />                        
                })
              }
            </div>

        </div>
    </Container>
  )
}

export default Events