const Container = (props) => {
  return (
    <div className='w-full h-full overflow-auto'>{props.children}</div>
  )
}

export default Container