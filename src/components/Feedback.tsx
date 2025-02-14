import DonutChart from "@/components/ui/DonutChart"
import { backendUrl } from "@/data/links"
import axios from "axios"
import { useEffect, useState } from "react"

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState(0)
    const [data, setData] = useState([{}])
    const [amazingCount, setAmazingCount] = useState(0)
    const [veryGoodCount, setVeryGoodCount] = useState(0)
    const [goodCount, setGoodCount] = useState(0)
    const [badCount, setBadCount] = useState(0)
  
    useEffect(() => {
      async function fetchFeedbacks(){
          const response = await axios.get(`${backendUrl}/feedbacks/all`)
  
          const feedbackList = response.data
          setFeedbacks(feedbackList.length)
  
          setAmazingCount(0)
          setVeryGoodCount(0)
          setGoodCount(0)
          setBadCount(0)
  
          feedbackList.forEach((item:any) => {
              if (item.experience === 'Amazing') {
                  setAmazingCount(prevCount => prevCount + 1)
              }
              else if (item.experience === 'Very Good') {
                  setVeryGoodCount(prevCount => prevCount + 1)
              }
              else if (item.experience === 'Good') {
                  setGoodCount(prevCount => prevCount + 1)
              }
              else if (item.experience === 'Bad') {
                  setBadCount(prevCount => prevCount + 1)
              }
          })
      }
      fetchFeedbacks()
    }, [])
  
    useEffect(() => {
      setData([
        { name: 'Amazing', value: amazingCount },
        { name: 'Very Good', value: veryGoodCount },
        { name: 'Good', value: goodCount },
        { name: 'Bad', value: badCount }
      ])
    }, [amazingCount, veryGoodCount, goodCount, badCount])

    return (
        <div className='w-full bg-white Feedback-Chart items-center border shadow-lg rounded-lg p-4 space-y-6 sm:space-x-3'>

            <div className="w-full space-y-6 sm:space-y-4">
                <div className='w-full'>
                    <p className='font-semibold text-center text-xl text-zinc-700 mt-2 sm:mt-0'>Recent Feedback</p>
                </div>

                <div className='w-full flex flex-col justify-center items-center'>
                    <DonutChart data={data} />
                    <div className='relative'>
                        <div className='absolute top-[-8.5rem] left-[-3rem]'>
                            <div className='flex flex-col justify-center items-center space-y-1'>
                                <p className='text-4xl font-bold'>{feedbacks}</p>
                                <p className='text-sm whitespace-nowrap'>Total Feedbacks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col h-full justify-start pb-3 sm:pt-2 items-center text-zinc-600 w-full px-4'>

                <div className='flex w-full justify-between items-center pb-4'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-green-400 mt-1'></div>
                        <p className='font-semibold text-sm'>Amazing</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>{amazingCount}</p>
                </div>

                <div className='flex w-full justify-between items-center border-t py-4'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-blue-400 mt-1'></div>
                        <p className='font-semibold text-sm'>Very Good</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>{veryGoodCount}</p>
                </div>

                <div className='flex w-full justify-between items-center border-t py-4'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-violet-400 mt-1'></div>
                        <p className='font-semibold text-sm'>Good</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>{goodCount}</p>
                </div>

                <div className='flex w-full justify-between items-center border-t pt-4'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-red-400 mt-1'></div>
                        <p className='font-semibold text-sm'>Bad</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>{badCount}</p>
                </div>
            </div>

        </div>
    )
}

export default Feedback