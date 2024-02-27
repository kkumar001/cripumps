import React from 'react'
import { products } from '../../assets'

const Products = () => {
    return (
        <div className='w-full flex flex-col gap-2 my-4 text-center px-2'>
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <div className='w-full flex justify-center items-center text flex-col gap-2'>
                <img src={products} className='w-[80%]' alt="products" />
                <p className='text-[14px]'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                <hr className='w-full border border-[#cb7a5d]' />
                <p className='font-bold mt-1'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                <p className='my-1'>CHEMICALS & PROCESS <span className='text-[#cb7a5d]'>|</span> POWER <span className='text-[#cb7a5d]'>|</span> WATER & WASTE WATER <span className='text-[#cb7a5d]'>|</span> OILS & GAS <span className='text-[#cb7a5d]'>|</span> PHARMA <span className='text-[#cb7a5d]'>|</span> SUGARS & DISTILLERIES <span className='text-[#cb7a5d]'>|</span> PAPER & PULP <span className='text-[#cb7a5d]'>|</span> MARINE & DEFENCE <span className='text-[#cb7a5d]'>|</span> METAL & MINING <span className='text-[#cb7a5d]'>|</span>
                    FOOD & BEVERAGE <span className='text-[#cb7a5d]'>|</span> PETROCHEMICAL & REFINERIES <span className='text-[#cb7a5d]'>|</span> SOLAR <span className='text-[#cb7a5d]'>|</span> BUILDING <span className='text-[#cb7a5d]'>|</span> HVAC <span className='text-[#cb7a5d]'>|</span> FIRE <span className='text-[#cb7a5d]'>|</span> FIGHTING <span className='text-[#cb7a5d]'>|</span> AGRICULTURE & RESIDENTIAL</p>
            </div>
        </div>
    )
}

export default Products