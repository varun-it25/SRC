import Container from '@/components/Right'
import { Upload } from 'lucide-react'
import { useState } from 'react'
import PopUp from '@/components/gallery-Popup'

interface UploadButtonProps {
  setClose: (value: boolean) => void;
  no: number;
}

const UploadButton: React.FC<UploadButtonProps> = ({ setClose, no }) => {
  return <button onClick={() => setClose(true)} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2"><Upload size={15} /></button>
};

const Gallery = () => {
  const [isOpen, setClose] = useState<boolean>(false)
  
  return (
    <Container>
      { isOpen  && <PopUp setClose={setClose} /> }
      <div className="w-full h-[50vh] p-6 pr-6 pl-6">
        <div className="w-full mb-10 flex justify-between items-center">
          <p className="font-bold text-2xl">Gallery</p>
        </div>

        <div className="w-full pb-5">

          <div className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mb-5`}>
            <div className={'w-full relative aspect-video h-full bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full aspect-video rounded-xl' src='https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />              
              <UploadButton no={1} setClose={setClose} />
            </div>

            <div className={'w-full aspect-video grid  grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4'}>
              <div className='w-full relative rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?cs=srgb&dl=pexels-pixabay-433452.jpg&fm=jpg' />
                  <UploadButton no={1} setClose={setClose} />
              </div>

              <div className='w-full relative rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://www.hire4event.com/blogs/wp-content/uploads/2019/03/Type-of-events.jpg' />
                  <UploadButton no={1} setClose={setClose} />
              </div>

              <div className='w-full relative rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://theroyalreception.com/assets/img/gallery/events/1.jpg' />
                  <UploadButton no={1} setClose={setClose} />
              </div>

              <div className='w-full relative rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://scandiweb.com/blog/wp-content/uploads/2020/01/ecom360_conference_hosting_successful_event.jpeg' />
                  <UploadButton no={1} setClose={setClose} />
              </div>
            </div>
          </div>

          <div className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4`}>

            <div className={'w-full relative aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src='https://nvpmart.in/wp-content/uploads/2023/02/EventManagement.jpg' />
              <UploadButton no={1} setClose={setClose} />
            </div>

            <div className={'w-full relative aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src='https://images.ctfassets.net/3dar4x4x74wk/48LO8M4jbhPFbFIfgNO6nG/89b7b5c992cdf2628b6a047edacaf120/Delux_Tablescape_275.jpg' />
              <UploadButton no={1} setClose={setClose} />
            </div>

            <div className={'w-full relative aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src='https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg' />
              <UploadButton no={1} setClose={setClose} />
            </div>

          </div>
          <input type='file' id='new_image' accept={`image/*`} className='hidden' />
        </div>

      </div>
    </Container>
  )
}

export default Gallery