import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Plus, User } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { uploadFile } from '@/utils/uploadFile'
import axios from 'axios'
import { backendUrl } from '@/data/links'

const Add_Team_Member = () => {
    const [guestName, setGuestName] = useState('')
    const [role, setRole] = useState('Select a role')
    const [guestImage, setGuestImage] = useState<File | null>(null)
    const [guestEmail, setGuestEmail] = useState('')
    const [guestPhone, setGuestPhone] = useState('')

    const handleGuestImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setGuestImage(e.target.files[0])
        }
    }

    const handleSubmit = async () => {
        const member_image = await uploadFile(guestImage);
        const data = {
            member_image,
            member_name: guestName,
            member_role: role,
            member_email: guestEmail,
            member_mobile_no: guestPhone
        }

        try{
            axios.post(`${backendUrl}/create-member`, data)
        }
        catch(err){ }
    }

    const isFormValid = guestName && guestEmail && guestPhone && role !== 'Select a role'

    return (
        <Container>
            <div className='w-full h-fit p-6'>
                <div className="w-full mb-7">
                    <p className="font-bold text-2xl">Add New Member</p>
                </div>

                <div className="w-full bg-white border rounded-lg p-6 mb-4">
                    <div className="flex space-x-3 items-center mb-4">
                        <p className="py-1 bg-blue-200 px-4 font-semibold rounded-full">Member Information</p>
                    </div>

                    <div className="px-2 sm:px-3 py-3 w-full space-y-5">
                        <div className="w-full flex space-x-4 items-center font-semibold text-lg">
                            {guestImage ? (
                                <div className='w-16 ml-[-0.2rem] h-16'>
                                    <img className='w-full border h-full rounded-full object-cover' src={URL.createObjectURL(guestImage)} />
                                </div>
                            ) : (
                                <div className="w-fit ml-[-0.5rem] bg-zinc-200 rounded-full p-3 text-zinc-600 cursor-pointer">
                                    <User size={32} />
                                </div>
                            )}
                            <div className="flex space-x-3">
                                {guestImage ? (
                                    <>
                                        <label htmlFor='guestImage' className="hover:underline text-yellow-500 cursor-pointer text-sm">Update</label>
                                        <p className="hover:underline text-red-500 cursor-pointer text-sm" onClick={() => setGuestImage(null)}>Remove</p>
                                    </>
                                ) : (
                                    <label htmlFor='guestImage' className="underline cursor-pointer text-sm">Upload</label>
                                )}
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
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Super Admin">Social Media</SelectItem>
                                    <SelectItem value="Admin">Video Editing</SelectItem>
                                    <SelectItem value="Moderator">Photography / Videoography</SelectItem>
                                    <SelectItem value="Editor">Graphic Design</SelectItem>
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

                <Button className="flex space-x-2 w-full" onClick={handleSubmit} disabled={!isFormValid}>
                    <Plus size={30} />
                    <p>Add</p>
                </Button>
            </div>
        </Container>
    )
}

export default Add_Team_Member