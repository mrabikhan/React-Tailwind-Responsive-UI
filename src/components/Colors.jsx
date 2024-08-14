import React, {useState} from 'react'

function Colors() {
    const[color, setColor] = useState("green")
  return (
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>

    <div className='flex justify-center gap-7'>
        <button className='p-5 rounded-md bg-red-800' onClick={()=>{setColor("Red")}}>Red</button>
        <button className='p-5 rounded-md bg-blue-500' onClick={()=>{setColor("Blue")}}>Blue</button>
        <button className='p-5 rounded-md bg-yellow-500' onClick={()=>{setColor("Yellow")}}>yellow</button>  
    </div>


    </div>
  )
}

export default Colors