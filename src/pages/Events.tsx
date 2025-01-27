import Event from '@/components/Event'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { backendUrl } from '@/data/links'

const Events = () => {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${backendUrl}/events`)
        setEvents(res.data)
      } catch (error) {
        console.error("Error fetching events:", error)
      }
    }
    
    fetchEvents()
  }, [])


  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Events</p>
                <Link to={`/create-event`}><Button className='bg-blue-600 hover:bg-blue-500 font-bold'><Plus />Create Event</Button></Link>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
              {
                events.map(({ _id, event_banner, event_name, event_venue, event_date, event_start_time, event_end_time, guest_image, guest_name }) => {
                    return <Event key={_id} evendId={_id} eventName={event_name} eventBanner={event_banner}  guestImg={guest_image} eventDate={event_date} eventGuest={guest_name} eventTime={`${event_start_time} to ${event_end_time}`} eventVenue={event_venue} />                        
                })
              }
            </div>

        </div>
    </Container>
  )
}

export default Events