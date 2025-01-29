import Container from '@/components/Right'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { UploadCloud } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { backendUrl } from '@/data/links'

const Gallery = () => {
  const [res, setRes] = useState<any[]>([])

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await axios.get(`${backendUrl}/gallery`)
        setRes(response.data)
      } catch (error) {
        console.error("Error fetching gallery:", error)
      }
    }
    fetchGallery()
  }, [])

  return (
    <Container>
      <div className="w-full h-fit p-6">
        <div className="w-full mb-7 flex justify-between items-center">
          <p className="font-bold text-2xl">Gallery</p>
          <Link to="/upload-media">
            <Button className="bg-blue-600 hover:bg-blue-500 font-bold">
              <UploadCloud /> Upload More
            </Button>
          </Link>
        </div>

        <div className="Gallery-parent">
          {res.map(({ file_type, file_name, file_url }, index) => {
            if (file_type === 'image') {
              return (
                <img key={index} src={file_url} alt={file_name} className="Gallery-child rounded mb-4 w-full h-auto" />
              )
            } else if (file_type === 'video') {
              return (
                <video key={index} src={file_url} controls className="Gallery-child rounded mb-4 w-full h-auto" />
              )
            }
            return null
          })}
        </div>
      </div>
    </Container>
  )
}

export default Gallery