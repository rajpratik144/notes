import React from 'react'
import { useState } from 'react'

const Input = ({tasks,settasks}) => {
    const [title, settitle] = useState('')
    
    const [description, setDescription] = useState('')

    const submitHandler=(e)=>{
        
        e.preventDefault()
        
        settasks([...tasks,{title,description}])
        
        settitle('')
        setDescription('')


    }

    return (
        <div className='text-gray-200 text-4xl w-1/2'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col gap-10 p-10'>
                <input className='border-gray-600 border-2 p-3 rounded-[5px]'
                    type="text"
                    placeholder='Enter the heading' 
                    value={title}
                    onChange={(e)=>{
                    settitle(e.target.value)  
                    }}/>
                <textarea className='border-gray-600 border-2 p-3 rounded-[5px]'
                    placeholder='Discription...' 
                    value={description}
                    onChange={(e)=>{
                    setDescription(e.target.value)
                    }}/>
                    <button className='bg-amber-50 text-black rounded-[5px] p-5'>Add Note</button>
            </form>
        </div>
    )
}

export default Input