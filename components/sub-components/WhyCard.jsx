import React from 'react'

const WhyCard = ({ title, description }) => {
  return (
    <div className='p-2 bg-slate-300 w-80 h-64 flex flex-col gap-2 border-[.5px] border-indigo-600 rounded-lg '>
        <h1 className='text-lg text-slate-400 font-semibold'>{title}</h1>
        <p className='text-slate-600'>{description}</p>
    </div>
  )
}

export default WhyCard