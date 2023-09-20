'use client'
import Image from 'next/image'
import React from 'react'

const ProfileCard = ({ userName, userPic , storyCount }) => {
  return (
    <div className='flex flex-col gap-3 p-4 bg-gray-200 rounded-md mb-6'>
        <Image
          src={userPic}
          height={40}
          width={40}
          className='rounded-full h-[40px] w-[40px]'
          alt='Profile Pic'
        />
        <p className='font-bold text-2xl text-slate-800'>{ userName }</p>
        <p className='text-sm font-thin text-indigo-500'>Story Count: {storyCount}</p>

    </div>
  )
}

export default ProfileCard