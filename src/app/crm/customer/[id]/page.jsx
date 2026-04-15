import React from 'react'

async function page({ params }) {
  const { id } = await params;
  return (
    <div className='text-black'>
      cliente tal
    </div>
  )
}

export default page
