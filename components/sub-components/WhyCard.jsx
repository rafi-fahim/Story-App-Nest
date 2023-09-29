import React from 'react'

const WhyCard = ({ title, description }) => {
  return (
    <div className='p-2 bg-gradient-to-br from-yellow-200 via-lime-300 to-cyan-200 w-80 h-64 flex flex-col gap-2 border-[.5px] border-indigo-600 rounded-lg '>
        <h1 className='text-xl text-indigo-800 font-semibold'>{title}</h1>
        <p className='text-slate-600'>{description}</p>
    </div>
  )
}

export default WhyCard