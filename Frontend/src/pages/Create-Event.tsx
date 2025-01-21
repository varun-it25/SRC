import React, { useEffect, useState } from 'react'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UploadCloud, User } from 'lucide-react'

const CreateEvent = () => {
  const [eventName, setEventName] = useState('')
  const [venue, setVenue] = useState('')
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventStartTime, setEventStartTime] = useState('')
  const [eventEndTime, setEventEndTime] = useState('')
  const [banner, setBanner] = useState<File | null>(null)

  const [guestName, setGuestName] = useState('')
  const [guestImage, setGuestImage] = useState<File | null>(null)
  const [guestEmail, setGuestEmail] = useState('')
  const [guestPhone, setGuestPhone] = useState('')

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBanner(e.target.files[0])
    }
  }

  const handleGuestImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGuestImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    console.log('Event Info:', { eventName, venue, description, eventDate, eventStartTime, eventEndTime, banner })
    console.log('Guest Info:', { guestName, guestEmail, guestPhone })
  }

  const isFormValid = eventName && venue && description && eventDate && eventStartTime && eventEndTime && guestName && guestEmail && guestPhone && banner;

  return (
    <Container>
      <div className="w-full flex-col flex h-fit p-6 space-y-6">
        <div className="w-full">
          <p className="font-bold text-2xl">Create New Event</p>
        </div>

        {/* Event Information */}
        <div className="w-full border rounded-lg p-4 sm:p-6">
          <div className="flex space-x-3 items-center mb-4">
            <p className="py-1 bg-blue-200 px-4 font-semibold rounded-full">Step 1</p>
            <p className="font-semibold text-lg">Event Information</p>
          </div>

          <div className="p-1 sm:p-3 w-full space-y-5">
            {
                banner
                  ? <label htmlFor="banner" className="w-full h-28 sm:h-52 rounded-xl flex justify-center text-zinc-600 items-center border-zinc-300 space-x-2 text-xl sm:text-2xl font-bold border-2 border-dashed bg-zinc-100 cursor-pointer hover:bg-zinc-200">
                    <img src={URL.createObjectURL(banner)} className='h-full w-full rounded-xl object-cover' />
                  </label>
                  : <label htmlFor="banner" className="w-full h-28 sm:h-52 rounded-xl flex justify-center text-zinc-600 items-center border-zinc-300 space-x-2 text-xl sm:text-2xl font-bold border-2 border-dashed bg-zinc-100 cursor-pointer hover:bg-zinc-200">
                    <UploadCloud size={30} />
                    <p>Banner</p>
                  </label>
            }
            
            <input id="banner" type="file" className="hidden" onChange={handleBannerChange} />

            <div className="space-y-1">
              <p className="font-semibold text-xs">Name</p>
              <Input value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Jigyasa" />
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-xs">Venue</p>
              <Input value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="D-Block, Auditorium, JECRC" />
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-xs">Description</p>
              <Textarea rows={5} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write something here..." />
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-xs">Date</p>
              <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </div>

            <div className="space-y-1 w-full">
              <p className="font-semibold text-xs">Time</p>
              <div className="w-full flex gap-4 items-center">
                <Input type="time" value={eventStartTime} onChange={(e) => setEventStartTime(e.target.value)} />
                <p>to</p>
                <Input type="time" value={eventEndTime} onChange={(e) => setEventEndTime(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Guest Information */}
        <div className="w-full border rounded-lg p-6">
          <div className="flex space-x-3 items-center mb-4">
            <p className="py-1 bg-red-200 px-4 font-semibold rounded-full">Step 2</p>
            <p className="font-semibold text-lg">Guest Information</p>
          </div>

          <div className="p-3 w-full space-y-5">
            <div className="w-full flex space-x-4 items-center font-semibold text-lg">
              {
                guestImage
                ? <div className='w-16 ml-[-0.2rem] h-16'>
                    <img className='w-full border h-full rounded-full object-cover' src={URL.createObjectURL(guestImage)} />
                </div>  

                : <div className="w-fit ml-[-0.5rem] bg-zinc-100 rounded-full p-3 text-zinc-500 cursor-pointer">
                    <User size={40} />
                </div>              
              }

              {
                guestImage
                ? <div className='flex space-x-3'>
                    <label htmlFor='guestImage' className="hover:underline text-yellow-500 cursor-pointer">Update</label>
                    <p className="hover:underline text-red-500 cursor-pointer" onClick={() => setGuestImage(null)}>Remove</p>
                </div>
                : <label htmlFor='guestImage' className="hover:underline cursor-pointer">Upload</label>
              }              
            </div>
            <input id="guestImage" type="file" className="hidden" onChange={handleGuestImage} />

            <div className="space-y-1">
              <p className="font-semibold text-xs">Name</p>
              <Input value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Sister Shivani" />
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-xs">Email ID</p>
              <Input type="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} placeholder="shivani@gmail.com" />
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-xs">Mobile No.</p>
              <Input type="tel" value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} placeholder="+91 98765-43210" />
            </div>
          </div>
        </div>

        <Button className="flex space-x-2" onClick={handleSubmit} disabled={!isFormValid}>
          <UploadCloud size={30} />
          <p>Publish</p>
        </Button>
      </div>
    </Container>
  )
}

export default CreateEvent