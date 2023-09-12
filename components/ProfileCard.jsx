'use client'
import Image from 'next/image'
import React from 'react'
import {img} from '@/public/empty-profile.png'

const ProfileCard = ({ userName }) => {
  return (
    <div className='flex flex-col gap-3 p-4 bg-gray-200 rounded-md'>
        <Image
          src={img}
        />
        <p className='font-bold text-2xl text-slate-800'>{ userName }</p>
        <p className='text-sm font-thin text-indigo-500'>Story Count: {"10"}</p>

    </div>
  )
}

export default ProfileCard