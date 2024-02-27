import React from 'react'
import { trophy, people } from '../../assets'

const Award = () => {
  return (
    <div className='w-full flex md:flex-row flex-col gap-4 my-4 px-2 md:items-start items-center'>
        <div className='md:w-[30%] w-[90%] flex items-center justify-center'>
          <img src={trophy} alt="trophy" className='h-[90%] md:w-auto w-[60%]' />
        </div>
        <div className='md:w-[70%] w-[90%] flex flex-col gap-3'>
            <p className='text-[16px] font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul className='ml-[40px] list-disc'>
                <li className=''>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with loT enabled control panel.</li>
            </ul>
            <img src={people} alt="people" />
            <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
    </div>
  )
}

export default Award