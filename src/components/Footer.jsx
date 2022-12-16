import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return <>
    <footer className='bg-siteCol h-auto mt-24 w-full'>
      <div id='socials' className="connect p-5 flex flex-col gap-3 items-center">
        <h2 className='text-xl'>Connect with me:</h2>
        <div className='text-4xl flex gap-5'>
          <a href="https://linkedin.com/in/williamsbalogun">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://twitter.com/ihemzDev?t=IRI8Br6qUGX9GqWw&s=09">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/willhemz">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://facebook.com/aj.willie.583">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
      <div className='p-5 text-center text-xs opacity-75 font-thin'>
        <code>&copy; 2022 Williams Balogun. All Rights Reserved</code>
      </div>
    </footer>
  </>
}

export default Footer
