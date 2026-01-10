import React from 'react'

const Card = ({title, description , key, idx, deletenode}) => {
  return (
    <div className='w-50 h-60 bg-amber-50 flex flex-col rounded-2xl justify-between'>
      <div className='w-50 h-60 overflow-auto  p-7'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <p className='text-sm '>{description}</p>
      </div>
      <button onClick={()=>{deletenode(idx)}} className='bg-red-500 p-1 rounded w-40 flex justify-center font-bold m-5'>delete node</button>
    </div>
  )
}

export default Card