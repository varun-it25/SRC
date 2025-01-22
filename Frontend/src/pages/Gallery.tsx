import Container from '@/components/Right'
import { Button } from '@/components/ui/button'
import { images } from '@/data/galleryImages'
import { UploadCloud } from 'lucide-react'

const Gallery = () => {
  return (
    <Container>
        <div className='w-full h-fit p-6'>

            <div className='w-full mb-7 flex justify-between items-center'>
                <p className='font-bold text-2xl'>Gallery</p>
                <Button className='bg-blue-700 hover:bg-blue-600 font-bold'><UploadCloud />Upload New</Button>
            </div>

            <div className='Gallery-parent'>
                {
                    images.map(url => <img src={url} className='Gallery-child rounded mb-4 w-full'/>)
                }                
            </div>
        </div>
    </Container>
  )
}

export default Gallery