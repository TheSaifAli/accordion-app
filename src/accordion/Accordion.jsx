import React, { useState } from 'react'
import { questions } from './api'
import MyAccordion from './MyAccordion'

const Accordion = () => {
    const [data ,setData] = useState(questions)
  return (
    <div className='flex flex-col mx-auto bg-[#F0F3F4] drop-shadow-xl rounded-md w-[90%]  md:w-[50%] lg:w-[40%] my-20 py-10 '>
        <h1 className='text-center font-bold mb-5 text-lg '>React Interview Question</h1>
    
        {
        data.map((curEl)=>{ 
            const {id} = curEl
            return <MyAccordion key={id} {...curEl}/>
        })
      }
    </div>
  )
}

export default Accordion
