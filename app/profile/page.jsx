'use client'
import ProfileCard from '@/components/ProfileCard'
import React from 'react'
import { UserAuth } from '../context/AuthContext'
const page = () => {
  const { user } = UserAuth()
  return (
    <>
        <div className='p-4'>
          {user && <ProfileCard userName= {user.displayName}/>}
        </div>
    </>
  )
}

export default page