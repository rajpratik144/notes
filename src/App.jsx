import React from 'react'
import Input from './components/Input'
import Display from './components/Display'
import { useState } from 'react'

const App = () => {
  const [tasks, settasks] = useState([])

  const deletenote = (idx)=>{
  settasks(tasks.filter((_, index) => index !== idx))
   }
  return (
    <div className='bg-gray-800 h-screen'>
      <h1 className='text-white text-6xl flex justify-center '>Notes</h1>
      <div className='bg-gray-800 flex '>
        <Input tasks={tasks} settasks={settasks}/>
        <Display tasks={tasks} deletenode={deletenode}/>
      </div>
    </div>
  )
}

export default App