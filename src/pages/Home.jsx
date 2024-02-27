import React from 'react'
import Header from './Components/Header'
import Award from './Components/Award'
import Products from './Components/Products'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div className='w-full flex flex-col bg-gradient-to-b from-[#fff] to-[#f5efad] items-center justify-center'>
        <Header />
        <Award />
        <Products />
        <Footer />
    </div>
  )
}

export default Home