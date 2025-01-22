import LinearChart from '@/components/ui/LinearChart'

const Total_Events = () => {
  return (
    <div className='w-full col-span-1 rounded bg-white shadow-md border pb-2'>
        <p className='ml-2 pl-4 pt-4 pb-2 font-semibold text-lg'>Total Events</p>
        <div className='w-full h-64 sm:h-72 ml-[-0.7rem]'>
            <LinearChart />
        </div>
    </div>
  )
}

export default Total_Events