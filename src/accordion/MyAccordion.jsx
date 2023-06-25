import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const MyAccordion = ({question,answer}) => {
const [show ,setShow] = useState(false)
const [myClass, setMyClass] = useState('');
const onClickHandle = ()=>{
    setShow(!show)
    setMyClass('iconAnime')
    
}
  return (
    <>
        <div className={`flex justify-start items-center bg-[#979A9A] m-4 ${show &&'mx-4 mt-4 mb-0 rounded-b-none'} py-2 pl-2 space-x-4 rounded-md drop-shadow-md `}>
            <p onClick={onClickHandle
        }>
            {show?<RemoveCircleIcon className={`drop-shadow-md cursor-pointer ${myClass} `} />:<AddCircleIcon className={`drop-shadow-md cursor-pointer ${myClass}`}/>}</p>
            <h1 className='font-semibold text-md'>{question}</h1>
        </div>
        {show && <p className='mx-4 rounded-b-md bg-[#ECF0F1] p-2 text-sm drop-shadow-md myanime'>{answer}</p>}
    </>
  )
}

export default MyAccordion
