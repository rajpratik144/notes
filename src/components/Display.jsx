import React from 'react'
import Card from './Card'

const Display = ({tasks,deletenode}) => {
  return (
    <div className='w-1/2 h-screen p-10 flex gap-5 flex-wrap overflow-auto'>
        {tasks.map((tasks,idx)=>{
          return(
          <Card 
            key={idx}
            idx={idx}
            title={tasks.title}
            description={tasks.description} 
            deletenode={deletenode}
            />
          )
        })}    
    </div>
  )
}

export default Display