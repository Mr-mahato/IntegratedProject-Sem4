import React from 'react'
import { useParams } from 'react-router-dom'
export default function SummerVeg() {
    const {vegetableName} = useParams()
  return (
    <div className='relative'>
        <h1>{vegetableName}</h1>
    </div>
  )
}
