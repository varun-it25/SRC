import DonutChart from "@/components/ui/DonutChart"

const Feedback = () => {
  return (
    <div className='w-full bg-white Feedback-Chart items-center border shadow-lg rounded-lg p-4 space-y-6 sm:space-x-3'>

            <div className="w-full space-y-6 sm:space-y-4">
                <div className='w-full'>
                    <p className='font-semibold text-center text-xl text-zinc-700 mt-2 sm:mt-0'>Students Feedback</p>
                </div>

                <div className='w-full flex flex-col justify-center items-center'>
                    <DonutChart />
                    <div className='relative'>
                        <div className='absolute top-[-8.5rem] left-[-3rem]'>
                            <div className='flex flex-col justify-center items-center space-y-1'>
                                <p className='text-4xl font-bold'>32</p>
                                <p className='text-sm whitespace-nowrap'>Total Feedbacks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col h-full justify-start pb-3 sm:pt-3 items-center text-zinc-600 w-full px-4'>

                <div className='flex w-full justify-between items-center pb-3'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-green-400 mt-1'></div>
                        <p className='font-semibold text-sm'>5 Stars</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>10</p>
                </div>

                <div className='flex w-full justify-between items-center border-t py-3'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-blue-400 mt-1'></div>
                        <p className='font-semibold text-sm'>4 Stars</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>14</p>
                </div>

                <div className='flex w-full justify-between items-center border-t py-3'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-violet-400 mt-1'></div>
                        <p className='font-semibold text-sm'>3 Stars</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>5</p>
                </div>

                <div className='flex w-full justify-between items-center border-t py-3'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-yellow-400 mt-1'></div>
                        <p className='font-semibold text-sm'>2 Stars</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>1</p>
                </div>

                <div className='flex w-full justify-between items-center border-t pt-3'>
                    <div className='flex space-x-4 justify-center items-center whitespace-nowrap'>
                        <div className='w-2 h-2 rounded-full bg-red-400 mt-1'></div>
                        <p className='font-semibold text-sm'>1 Stars</p>
                    </div>
                    <p className='font-semibold text-[0.9rem] mt-1 text-zinc-500'>2</p>
                </div>
            </div>


    </div>
  )
}

export default Feedback