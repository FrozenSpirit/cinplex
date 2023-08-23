import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const PagesNavbar = () => {
  return (
    <div className='absolute w-full flex justify-between mt-2 z-[100]'>

      <Link to={`/`}>
      <div className='w-[100px] h-[30px]  md:m-3 m-2 lg:w-[115px] lg:h-[45px] cursor-pointer'>
        <img src={logo} alt={logo} className='w-full h-full object-cover scale-85 md:scale-100' />
      </div>
      </Link>
      

      

    </div>
  )
}

export default PagesNavbar