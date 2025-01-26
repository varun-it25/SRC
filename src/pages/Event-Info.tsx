import '@/App.css'
import { Button } from '@/components/ui/button';
import { Calendar, Clock, EditIcon, IdCard, LucideTableOfContents, Mail, MapPin, Phone, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/Right'

const EventInfo = () => {
  return (
    <Container>
            <div className='w-full h-fit p-6'>

            <div className='w-full h-32 sm:h-40 mb-5 sm:mb-6 rounded-lg sm:rounded-xl'>
                <img src='https://i.ytimg.com/vi/uoIB25f0bTQ/maxresdefault.jpg' className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='border-zinc-400 border w-full rounded-lg p-6 sm:p-10'>
                <div className='flex justify-between items-center font-medium mb-4'>
                    <p className='px-4 py-1 rounded-full bg-blue-300 w-fit text-sm'>Upcoming</p>
                    {/* <div className='flex space-x-2 cursor-pointer hover:underline'>
                        <EditIcon />
                        <p>Edit</p>
                    </div>                     */}
                </div>
                <p className='text-3xl font-semibold mb-6 sm:mb-5'>Moon Meditaion</p>
                <p className='text-zinc-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus recusandae laudantium. Neque deserunt officiis reprehenderit quaerat fugiat vel, dolore facilis deleniti quas fuga totam ab consequatur dicta. Placeat consequuntur deleniti praesentium dolor ipsa ducimus accusamus esse voluptatibus in! Accusamus libero a dolorem distinctio iusto enim deserunt suscipit alias quae cupiditate ducimus, ad adipisci molestias eaque?</p>

                <div className='p-2 sm:p-6 space-y-7'>
                    <div className='font-medium flex text-zinc-800 items-center space-x-4'>
                        <img src='https://i1.sndcdn.com/artworks-Qag1yu0zbFMrOzdc-WE4kkw-t500x500.jpg' className='aspect-square w-11 rounded-full' />
                        <p className='text-xl font-medium'>Sister Shivani</p>
                    </div>
                    
                    <div className='px-1 flex flex-col items-start space-y-6'>
                        <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                            <p className='font-medium flex text-zinc-600 items-center space-x-3'><MapPin size={24} /><span>D-Block, Auditorium, JECRC</span></p>
                        </div>
                        <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                           <p className='font-medium flex text-zinc-600 items-center space-x-3'><Calendar size={24} /><span>Jan 10, 2025</span></p>
                        </div>

                        <div className='flex-col sm:flex-row flex items-center justify-between space-y-6 sm:space-y-0 space-x-0 sm:space-x-6'>
                           <p className='font-medium flex text-zinc-600 items-center space-x-3'><Clock size={24} /><span>10:00 AM - 12:00 PM</span></p>
                        </div>

                        <div className='flex space-x-6'>
                          <Link to={`/`} className='text-blue-600 font-medium hover:underline'>Participation</Link>
                          <Link to={`/`} className='text-blue-600 font-medium hover:underline'>Registration</Link>
                        </div>
                    </div>

                </div>
            </div>
      </div>
    </Container>
  )
}

export default EventInfo;