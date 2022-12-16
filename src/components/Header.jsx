import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
 const [showMenu, setShowMenu] = useState(false)
  return <>
    <header className='bg-siteCol bg-opacity-10 w-full p-5 relative'>
      <nav className='flex justify-between'>
        <div>
          <h3>Williams Balogun</h3>
        </div>
        <button onClick={()=>setShowMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {
          showMenu && <div className='fixed top-0 left-0 w-full h-screen bg-bgMenu flex justify-center items-center gap-16 flex-col z-10'>
            <button onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
            <div className='flex flex-col gap-3 items-center'>
              <Link to='/home'>Home</Link>
              <Link to='/home'>About</Link>
              <Link to='/home'>About</Link>
            </div>
          </div>
        }
      </nav>
    </header>
  </>
}

export default Header
