import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  // console.log('Hello');
  return (
    <div className='absolute w-full flex justify-between mt-2 z-[100]'>

      <div className='w-[100px] h-[30px]  md:m-3 m-2 lg:w-[115px] lg:h-[45px]'>
        <img src={logo} alt={logo} className='w-full h-full object-cover scale-85 md:scale-100' />
      </div>

      <div className='flex justify-center items-center'>
        {/* <Link to='/movielist'>  
        
        
        </Link> */}
       <button className='mx-2 bg-[#db0000] text-white  px-3 py-2'>Sign up</button>
        <button className='mx-2 mr-5 bg-[#db0000] text-white px-3 py-2'>Log in</button>
      </div>

    </div>
  )
}

export default Navbar