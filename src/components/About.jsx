import React from 'react'
import Faqs from './Faqs'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import Testinomial from './Testinomial'

function About() {
  return (
    <div>
        <Faqs />
        <h1 className='text-5xl mt-20 font-bold text-center'> Testinomials </h1>      
        <div className= ' flex flex-wrap my-20'>
    <Testinomial 
        name= "M Ahmed"
        para = "Nice Products, Highy Rcommended Place"
        src={man}
    />
    <Testinomial 
        name= "Ayesha"
        para = "Very Professional & High Quality Products"
        src={woman}
    />
    <Testinomial 
        name= "Zain Khalid"
        para = "Nice Products, Highy Rcommended Place"
        src={man}
    />
    <Testinomial 
        name= "Hira Farukh"
        para = "Sublime Experience With Cake Stories"
        src={woman}
    />
</div>
    </div>
  )
}

export default About