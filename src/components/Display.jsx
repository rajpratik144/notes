import React from 'react'
import Card from './Card'

const Display = ({tasks,deletenote}) => {
  return (
    <div className='w-1/2 h-screen p-10 flex gap-5 flex-wrap overflow-auto'>
        {tasks.map((tasks,idx)=>{
          return(
          <Card 
            key={idx}
            idx={idx}
            title={tasks.title}
            description={tasks.description} 
            deletenote={deletenote}
            />
          )
        })}    
    </div>
  )
}

export default Display