import React from 'react'
import DetalleCliente from '@/components/DetalleCliente';

async function page({ params }) {
  const { id } = await params;
  return (
    <div className='text-black'>
      <DetalleCliente/>
    </div>
  )
}

export default page
