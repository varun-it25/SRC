const Loader = () => {
  return (
    <div className="w-screen h-screen p-8 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center space-x-2">
          <div className="w-full flex justify-center items-center">
            <img src="/src.png" className="w-44 aspect-square rounded-full animate-pulse" />
          </div>
        </div>
    </div>
  )
}

export default Loader