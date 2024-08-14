import React from 'react'
import layers from '../assets/layers.jpg'
import gourmet from '../assets/gourmet.jpeg'
import jalal from '../assets/jalal.jpg'
import soften from '../assets/soften.png'

function Partners(){
return(
<div>  
<h1 className='text-2xl text-center font-bold md:text-4xl sm:text-3xl'>Industry Partners</h1>      
<div className='flex flex-wrap gap-40 justify-center my-20 w-full'>
<img className='w-40 h-40 flex ' src={layers}/>
<img className='w-40 h-40 flex' src={gourmet}/>
<img className='w-40 h-40 flex' src={jalal}/>
<img className='w-40 h-40 flex' src={soften}/>
</div>
</div> 
)}

export default Partners