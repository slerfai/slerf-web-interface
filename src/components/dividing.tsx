const Divding = (props: { id: string }) => {
  const { id } = props
  return (
    <div className='separator_blue' id={id}>
      <div className='separator_in'>
        <div className='separator_in2'></div>
      </div>
    </div>
  )
}

export default Divding
