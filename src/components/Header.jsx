import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import resume from '../pages/home/asset/resume.pdf'

const Header = () => {
 const [showMenu, setShowMenu] = useState(false)
  return <>
    <header className='bg-siteCol bg-opacity-10 w-full p-5 xs:px-10 lg:px-16 md:py-10 fixed top-0 z-50'>
      <nav className='flex justify-between text-xl sm:text-2xl 2xl:text-4xl'>
        <div>
          <h3>
            <a href="#home">Williams Balogun</a>
          </h3>
        </div>
        <button className='xl:hidden' onClick={()=>setShowMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {
          <div className={`absolute xl:static xl:bg-transparent top-0 left-0 w-full h-screen xl:w-auto xl:h-auto bg-bgMenu flex justify-center items-center gap-5 flex-col z-10 transition-all duration-500 ${showMenu ? 'translate-x-0 md:translate-x-[100%] md:w-1/2' : '-translate-x-full md:translate-x-full xl:translate-x-0'}`}>
            <button className='xl:hidden' onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
            <div className='flex flex-col xl:flex-row gap-3 items-center xl:text-base 2xl:text-xl xl:gap-6'>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#home'>Home</a>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#about'>Summary</a>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#education'>Education</a>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#experience'>Experience</a>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#qualities'>What I Offer</a>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#projects'>Projects</a>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#get_in_touch'>Get in Touch</a>
              <a className='links' onClick={()=>setShowMenu(false)} href='/#socials'>Socials</a>
              <a className='links' onClick={()=>setShowMenu(false)} href={resume} download='download'>Download CV</a>
            </div>
          </div>
        }
      </nav>
    </header>
  </>
}

export default Header
