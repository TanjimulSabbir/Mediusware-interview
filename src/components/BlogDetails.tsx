import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    const {id}=useParams()
  return (
    <div className='h-[400px] flex pt-20 justify-center'>BlogDetails id {id}</div>
  )
}
