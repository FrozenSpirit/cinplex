import React from 'react'
import logo from '../assets/logo.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.webp'

import insta from '../assets/instagram.svg'

const Footer = () => {
  const github_link = 'https://github.com/FrozenSpirit/cinplex/tree/main'
  const insta_link = 'https://www.instagram.com/'
  const linkedIn_link = 'https://www.linkedin.com/in/amit-martha-3605071b7/'

  return (
    <div className='h-[350px] sm:h-[250px] w-full text-white  flex flex-col justify-evenly '>

      <div className='flex flex-col sm:flex-row justify-between  h-2/3 sm:justify-between  items-center'>
        
        <div className='flex flex-col items-center justify-center'>
          <img src={logo} alt=""  className='object-cover scale-50 '/>
          <p>Powered by MovieDB API</p>
        </div>

        <div className='mt-3 sm:mt-0'>
          <input type="text" placeholder='Your Email' className='px-2 py-1 
          focus:outline-none  text-black h-full' />
          <button className='bg-[#db0000] px-2 py-1 ml-2'>
            Send
          </button>
        </div>

        <div className='w-full sm:w-[25%] py-3 sm:py-0 flex flex-col justify-evenly'>
          <div>
            Socials
          </div>

          <div className='flex items-center justify-center'>
            <img src={linkedin} alt="linkedin" className='w-[50px] h-[50px]  cursor-pointer' onClick={() => window.open(linkedIn_link)}/>
            <img src={github} alt="linkedin" className='w-[30px] h-[30px]  cursor-pointer' onClick={() => window.open(github_link)}/>
            <img src={insta} alt="linkedin" className='w-[30px] h-[30px] ml-2 cursor-pointer'onClick={() => window.open(insta_link)}/>

            
          </div>
        </div>
      </div>

{/* below footer */}

      <div className='w-full border-t-2 border-white '/>
      <div className='w-full flex justify-center items-center'>

        <div className='ml-5'>
          Created By Amit Martha
        </div>

       </div>

    </div>
  )
}

export default Footer