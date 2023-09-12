'use client'
import CRSFrom from '@/components/CRSFrom'
import React from 'react'
import { UserAuth } from '../context/AuthContext'

const page = () => {
  const { user } = UserAuth()
  return (
    <>
        <div className='w-full p-4 h-screen flex justify-center items-center'>
            {user? <CRSFrom userId={user.uid} /> : <p className='text-center text-red-500'>You have to logged in --- restricted page</p>}
        </div>
    </>
  )
}

export default page