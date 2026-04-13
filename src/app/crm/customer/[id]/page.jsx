import React from 'react'

async function page({ params }) {
  const { id } = await params;
  return (
    <div>
      cliente tal
    </div>
  )
}

export default page
