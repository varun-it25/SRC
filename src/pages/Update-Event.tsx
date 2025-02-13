import React, { useEffect, useState } from 'react'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, UploadCloud, User } from 'lucide-react'
import axios from 'axios'
import { backendUrl } from '@/data/links'
import { uploadFile } from '@/utils/uploadFile'
import { useParams } from 'react-router-dom'

const Loading = () => (
  <div className="flex justify-center items-center h-full space-x-4">
    <Loader2 size={40} className="animate-spin" />
    <p>Updating Event...</p>
  </div>
)

const Success = () => (
  <div className="w-full bg-green-200 text-center p-4 rounded-lg">
    <p className="font-semibold text-xl">Event Updated Successfully!</p>
  </div>
)

const Error = ({ message }) => (
  <div className="w-full bg-red-200 text-center p-4 rounded-lg">
    <p className="font-semibold text-xl">{message}</p>
  </div>
)

const Title = ({ step, name }: { step: number; name: string }) => (
  <div className="flex space-x-3 items-center mb-4">
    <p className="py-1 bg-blue-200 px-4 font-semibold rounded-full">Step {step}</p>
    <p className="font-semibold text-lg">{name}</p>
  </div>
)

const UpdateEvent = () => {
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

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  
  const [eventData, setEventData] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchEventData = async () => {
      const res = (await axios.get(`${backendUrl}/event/${id}`)).data
      setEventData(res)
      setEventName(res.event_name)
      setVenue(res.event_venue)
      setDescription(res.event_description)
      setEventDate(res.event_date)
      setEventStartTime(res.event_start_time)
      setEventEndTime(res.event_end_time)
      setGuestName(res.guest_name)
      setGuestEmail(res.guest_email)
      setGuestPhone(res.guest_mobile_no)
      console.log(res)
    }

    fetchEventData()
  }, [id])

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files) {
      setter(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    const event_banner = await uploadFile(banner)
    const guest_image = await uploadFile(guestImage)

    try {
      await axios.post(`${backendUrl}/create-event`, { event_banner,
        guest_image,
        event_name: eventName,
        event_venue: venue,
        event_description: description,
        event_date: eventDate,
        event_start_time: eventStartTime,
        event_end_time: eventEndTime,
        guest_name: guestName,
        guest_email: guestEmail,
        guest_mobile_no: guestPhone
      })
      setLoading(false)
      setStatus('success')
    } catch (err) {
      setLoading(false)
      setStatus('error')
      setErrorMessage('Failed to create event. Please try again later.')
    }
  }

  return (
    <Container>
      <div className="w-full flex-col flex h-fit p-6 space-y-6">
        <div className="w-full">
          <p className="font-bold text-2xl">Update Event</p>
        </div>

        {loading ? (
          <Loading />
        ) : status === 'success' ? (
          <Success />
        ) : status === 'error' ? (
          <Error message={errorMessage} />
        ) : (
          <>
            <div className="w-full bg-white border rounded-lg p-4 sm:p-6">
              <Title name="Event Information" step={1} />

              <div className="p-1 sm:p-3 w-full space-y-5">
                {eventData && !banner ? (
                  <label
                    htmlFor="banner"
                    className="w-full h-28 sm:h-52 rounded-xl flex justify-center text-zinc-600 items-center border-zinc-300 space-x-2 text-xl sm:text-2xl font-bold border-2 border-dashed bg-zinc-100 cursor-pointer hover:bg-zinc-200"
                  >
                    <img
                      src={eventData.event_banner}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </label>
                ) : banner ? (
                  <label
                    htmlFor="banner"
                    className="w-full h-28 sm:h-52 rounded-xl flex justify-center text-zinc-600 items-center border-zinc-300 space-x-2 text-xl sm:text-2xl font-bold border-2 border-dashed bg-zinc-100 cursor-pointer hover:bg-zinc-200"
                  >
                    <img
                      src={URL.createObjectURL(banner)}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </label>
                ) : (
                  <label
                    htmlFor="banner"
                    className="w-full h-28 sm:h-52 rounded-xl flex justify-center text-zinc-600 items-center border-zinc-300 space-x-2 text-xl sm:text-2xl font-bold border-2 border-dashed bg-zinc-100 cursor-pointer hover:bg-zinc-200"
                  >
                    <UploadCloud size={30} />
                    <p>Banner</p>
                  </label>
                )}
                <input
                  id="banner"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setBanner)}
                />

                <div className="space-y-1">
                  <p className="font-semibold text-xs">Name</p>
                  <Input
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Jigyasa"
                  />
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-xs">Venue</p>
                  <Input
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder="D-Block, Auditorium, JECRC"
                  />
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-xs">Description</p>
                  <Textarea
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write something here..."
                  />
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-xs">Date</p>
                  <Input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>

                <div className="space-y-1 w-full">
                  <p className="font-semibold text-xs">Time</p>
                  <div className="w-full flex gap-4 items-center">
                    <Input
                      type="time"
                      value={eventStartTime}
                      onChange={(e) => setEventStartTime(e.target.value)}
                    />
                    <p>to</p>
                    <Input
                      type="time"
                      value={eventEndTime}
                      onChange={(e) => setEventEndTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white border rounded-lg p-6">
              <Title name="Guest Information" step={2} />

              <div className="p-3 w-full space-y-5">
                <div className="w-full flex space-x-4 items-center font-semibold text-lg">
                  {eventData && !guestImage ? (
                    <div className="w-16 ml-[-0.2rem] h-16">
                      <img
                        className="w-full border h-full rounded-full object-cover"
                        src={eventData.guest_image}
                      />
                    </div>
                  ) : guestImage ? (
                    <div className="w-16 ml-[-0.2rem] h-16">
                      <img
                        className="w-full border h-full rounded-full object-cover"
                        src={URL.createObjectURL(guestImage)}
                      />
                    </div>
                  ) : (
                    <div className="w-fit ml-[-0.5rem] bg-zinc-100 rounded-full p-3 text-zinc-500 cursor-pointer">
                      <User size={40} />
                    </div>
                  )}

                  {eventData && !guestImage ? (
                    <div className="flex space-x-3">
                      <label
                        htmlFor="guestImage"
                        className="hover:underline text-yellow-500 cursor-pointer"
                      >
                        Update
                      </label>
                      <p
                        className="hover:underline text-red-500 cursor-pointer"
                        onClick={() => setGuestImage(null)}
                      >
                        Remove
                      </p>
                    </div>
                  ) : guestImage ? (
                    <div className="flex space-x-3">
                      <label
                        htmlFor="guestImage"
                        className="hover:underline text-yellow-500 cursor-pointer"
                      >
                        Update
                      </label>
                      <p
                        className="hover:underline text-red-500 cursor-pointer"
                        onClick={() => setGuestImage(null)}
                      >
                        Remove
                      </p>
                    </div>
                  ) : (
                    <label
                      htmlFor="guestImage"
                      className="hover:underline cursor-pointer"
                    >
                      Upload
                    </label>
                  )}
                </div>
                <input
                  id="guestImage"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setGuestImage)}
                />

                <div className="space-y-1">
                  <p className="font-semibold text-xs">Name</p>
                  <Input
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Sister Shivani"
                  />
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-xs">Email ID</p>
                  <Input
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="shivani@gmail.com"
                  />
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-xs">Mobile No.</p>
                  <Input
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98765-43210"
                  />
                </div>
              </div>
            </div>

            <Button className="flex space-x-2" onClick={handleSubmit}>
              <UploadCloud size={30} />
              <p>Update</p>
            </Button>
          </>
        )}
      </div>
    </Container>
  )
}

export default UpdateEvent