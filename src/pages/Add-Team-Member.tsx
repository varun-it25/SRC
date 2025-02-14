import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Loader2, Plus, User } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { uploadFile } from '@/utils/uploadFile'
import axios from 'axios'
import { backendUrl } from '@/data/links'
import { useNavigate } from 'react-router-dom'

function Loading() {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <div className="flex justify-center items-center h-full space-x-4">
        <Loader2 size={40} className="animate-spin" />
        <p>Creating Member...</p>
      </div>
    </div>
  )
}

function Success() {
  const nav = useNavigate()
  return (
    <div className='w-full h-[85vh] flex justify-center items-center'>
      <div className="w-80 sm:w-96 bg-green-200 text-center p-6 rounded-lg">
        <p className="font-semibold text-xl">Member Created Successfully!</p>
        <div className='flex space-x-3 w-full justify-center mt-5'>
          <Button size={`sm`} className='bg-white text-black hover:bg-zinc-100' onClick={() => nav(`/our-team`)}>Our Team</Button>
          <Button size={`sm`} className='bg-sky-600 hover:bg-sky-500' onClick={() => window.location.reload()}>Add New Member</Button>
        </div>
      </div>
    </div>
  )
}

function Error({ message }: any) {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <div className="w-80 sm:w-96 bg-red-200 text-center p-4 rounded-lg">
        <p className="font-semibold text-xl">{message}</p>
        <Button size={`sm`} className='bg-red-600 hover:bg-red-500' onClick={() => window.location.reload()}>Retry</Button>
      </div>
    </div>
  )
}

const Add_Team_Member = () => {
  const [guestName, setGuestName] = useState('')
  const [role, setRole] = useState('Select a role')
  const [guestImage, setGuestImage] = useState<File | null>(null)
  const [guestEmail, setGuestEmail] = useState('')
  const [guestPhone, setGuestPhone] = useState('')
  const [isCreating, setCreating] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<any>(null)

  const handleGuestImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGuestImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreating(true)
    const member_image = await uploadFile(guestImage)
    const data = {
      member_image,
      member_name: guestName,
      member_role: role,
      member_email: guestEmail,
      member_mobile_no: guestPhone
    }

    try {
      await axios.post(`${backendUrl}/create-member`, data)
      setCreating(false)
      setSuccess(true)
    } catch (err: any) {
      console.log(err.message)
      setError(err.response?.data?.message || err.message || 'Something went wrong')
      setCreating(false)
    }
  }

  const isFormValid = guestName && guestEmail && guestPhone && role !== 'Select a role' && guestImage

  return (
    <Container>
      {
        isCreating
          ? <Loading />
          : success
            ? <Success />
            : error
              ? <Error message={error} />
              : (
                <form className='w-full h-fit p-5 sm:p-6' onSubmit={handleSubmit}>
                  <div className="w-full mb-7">
                    <p className="font-bold text-2xl">Add New Member</p>
                  </div>

                  <div className="w-full bg-white border rounded-lg p-6 mb-4">
                    <div className="flex space-x-3 items-center mb-4">
                      <p className="py-1 bg-blue-200 px-4 font-semibold rounded-full">Member Information</p>
                    </div>

                    <div className="px-2 sm:px-3 py-3 w-full space-y-5">
                      <div className="w-full flex space-x-4 items-center font-semibold text-lg">
                        {
                          guestImage
                            ? <div className='w-16 ml-[-0.2rem] h-16'>
                                <img className='w-full border h-full rounded-full object-cover' src={URL.createObjectURL(guestImage)} />
                              </div>
                            : <div className="w-fit ml-[-0.5rem] bg-zinc-200 rounded-full p-3 text-zinc-600 cursor-pointer">
                                <User size={32} />
                              </div>
                        }

                        <div className="flex space-x-3">
                          {
                            guestImage
                              ? <>
                                  <label htmlFor='guestImage' className="hover:underline text-yellow-500 cursor-pointer text-sm">Update</label>
                                  <p className="hover:underline text-red-500 cursor-pointer text-sm" onClick={() => setGuestImage(null)}>Remove</p>
                                </>
                              : <label htmlFor='guestImage' className="underline cursor-pointer text-sm">Upload</label>
                          }
                        </div>
                      </div>
                      <input id="guestImage" type="file" className="hidden" onChange={handleGuestImage} />

                      <div className="space-y-1">
                        <p className="font-semibold text-xs">Name</p>
                        <Input value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Varun Kangotra" />
                      </div>

                      <div className="space-y-1">
                        <p className="font-semibold text-xs">Role</p>
                        <Select onValueChange={setRole}>
                          <SelectTrigger className="w-full"><SelectValue placeholder="Select a role" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Social Media">Social Media</SelectItem>
                            <SelectItem value="Video Editing">Video Editing</SelectItem>
                            <SelectItem value="Photography">Photography</SelectItem>
                            <SelectItem value="Videoography">Videoography</SelectItem>
                            <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1">
                        <p className="font-semibold text-xs">Email ID</p>
                        <Input type="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} placeholder="varun@gmail.com" />
                      </div>

                      <div className="space-y-1">
                        <p className="font-semibold text-xs">Mobile No.</p>
                        <Input type="tel" value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} placeholder="+91 92573-07752" />
                      </div>
                    </div>
                  </div>

                  <Button className="flex space-x-2 w-full" type='submit' disabled={!isFormValid}>
                    <Plus size={30} />
                    <p>Add</p>
                  </Button>
                </form>
              )
      }
    </Container>
  )
}

export default Add_Team_Member