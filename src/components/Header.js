const Header = (props) => {
  return (
    <>
     
      <div className="box p-0.5">
        <strong className="cursor flex justify-between bg-[#000082]  px-0.5">
          <div className=' text-white cursor-pointer '>{props.title}</div>
            <div 
            className='bg-element px-1 my-1  custom-border cursor-pointer'
            // onClick={() => setShowWindow(false)}
            >
              <div
              className='-my-1 pb-0.5'
              >X</div>
          </div>
        </strong>
          {/* <div>Text should be here...</div> */}
        </div>
    
    </>
  )
}

export default Header;