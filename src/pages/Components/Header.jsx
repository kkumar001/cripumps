import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-center my-2 px-2'>
        <Link to='/'>
           <img src={logo} alt="logo" className='h-[80px]' />
        </Link>
    </div>
  )
}

export default Header