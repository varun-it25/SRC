import { Upload } from "lucide-react"
import { useState, useEffect } from "react"
import PopUp from "../components/gallery-Popup"
import axios from "axios"
import { backendUrl } from "@/data/links"
import Container from "@/components/Right"
import Loader from "@/components/Loader"

interface ImageData {
  _id: string
  cloudinaryUrl: string
}

const Gallery = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [id, setId] = useState<string>("")
  const [images, setImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${backendUrl}/gallery/all`)
        setImages(response.data)
      } catch (err) {
        setError("Failed to load gallery images")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loader />
  if (error) return <p>{error}</p>

  return (
    <Container>
        <div className='w-full h-fit p-6'>
          <div className='w-full mb-7 flex justify-between items-center'>
            <p className='font-bold text-2xl'>SRC Gallery</p>
          </div>

          { isOpen && <PopUp setOpen={setOpen} id={id} /> }

          <div className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mb-4`}>

            <div className={'w-full relative aspect-video rounded-xl h-full bg-zinc-200'}>
              <img className='w-full h-full rounded-xl' src={images[0].cloudinaryUrl} />
              <button onClick={() => {setOpen(true); setId(images[0]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                <Upload size={15} />
              </button>
            </div>


            <div className={'w-full aspect-video grid  grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4'}>

              <div className='w-full relative rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={images[1].cloudinaryUrl} />
                  <button onClick={() => {setOpen(true); setId(images[1]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                    <Upload size={15} />
                  </button>
              </div>

              <div className='w-full relative rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={images[2].cloudinaryUrl} />
                  <button onClick={() => {setOpen(true); setId(images[2]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                    <Upload size={15} />
                  </button>
              </div>

              <div className='w-full relative rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={images[3].cloudinaryUrl} />
                  <button onClick={() => {setOpen(true); setId(images[3]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                    <Upload size={15} />
                  </button>
              </div>

              <div className='w-full relative rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={images[4].cloudinaryUrl} />
                  <button onClick={() => {setOpen(true); setId(images[4]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                    <Upload size={15} />
                  </button>
              </div>

            </div>
        </div>


        <div className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 pb-10 sm:pb-5`}>

            <div className={'w-full relative aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src={images[5].cloudinaryUrl} />
              <button onClick={() => {setOpen(true); setId(images[5]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                <Upload size={15} />
              </button>
            </div>

            <div className={'w-full relative aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src={images[6].cloudinaryUrl} />
              <button onClick={() => {setOpen(true); setId(images[6]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                <Upload size={15} />
              </button>
            </div>

            <div className={'w-full relative aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src={images[7].cloudinaryUrl} />
              <button onClick={() => {setOpen(true); setId(images[7]._id)}} className="absolute top-3 right-3 hover:text-blue-500 hover:bg-blue-100 text-blue-400 bg-blue-50 rounded-full p-2">
                <Upload size={15} />
              </button>
            </div>

        </div>

      </div>
    </Container>
  )
}

export default Gallery