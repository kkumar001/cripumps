import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='w-full h-[150px] bg-[#d94540] flex md:flex-row flex-col justify-around items-center gap-2 text-white mt-4 p-2'>
        <p className='flex gap-2 items-center'><FontAwesomeIcon icon={faPhone} />Toll free <b>1800 200 1234</b></p>
        <a href='www.facebook.com/cripumps' target='_blank' className='flex gap-2 items-center'><FontAwesomeIcon icon={faFacebook}/>www.facebook.com/cripumps</a>
        <a href='www.facebook.com/cripumps' target='_blank' className='flex gap-2 items-center'><FontAwesomeIcon icon={faGlobe}/>www.facebook.com/cripumps</a>
    </div>
  )
}

export default Footer