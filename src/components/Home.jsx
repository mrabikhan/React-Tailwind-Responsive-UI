import React from 'react'
import Cards from './Cards.jsx'
import birth from '../assets/birth.jpg'
import cust from '../assets/cust.jpg'
import prem from '../assets/prem.jpg'
import muffins from '../assets/muffins.jpg'
import back1 from '../assets/back1.jpg'
import back2 from '../assets/back2.jpg'
import dani from '../assets/dani.jpeg'
import rabi from '../assets/rabi.jpg'
import logo from '../assets/logo.png'
import Testinomial from './Testinomial.jsx'
import money from '../assets/money.png'
import ship from '../assets/shipped.png'
import quality from '../assets/reliability.png'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import Partners from './Partners.jsx'

function Home() {
    // let obj = {
    //     name: "Muhammmad Rabi",
    //     para: "My name is Rabi. I am a web developer",
    //     btnname: "Click Me"
    //    }
  return (
    <div>
    <div className="relative w-full bg-white mb-40">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
      Every Cake Tells a Story
      </h1>
      <p className="mt-10 text-lg text-gray-700">
      At Cake Stories, every creation is more than just a dessert—it's a celebration of life's
      sweetest moments. From custom cakes to premium muffins,we craft each bite with love, 
      turning your special occasions into cherished memories.
      </p>
        <div>
          <button
            type="button"
            className="rounded-md mt-5 bg-blue-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Our Products
          </button>
        </div>
    </div>
    <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
      <img
        className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
        src={back1}
        alt=""
      />
    </div>
  </div>
</div>
    <h1 className='text-center font-bold text-4xl p-5'> Premium Featured Products</h1>
     <div className='flex flex-col sm:flex-row gap-5 p-6 justify-around flex-wrap'>
     {/* <Cards 
      username = {obj.name}
      para = {obj.para}
      btn = {obj.btnname}
     /> */}
     
     <Cards
      src= {cust}
      username = "Customized Cakes"
      para= "Customize Your Cake For Upcoming Event"
      btn = "Order Now"
      />
    
     <Cards 
      src= {birth}
      username = "Birthday Cakes"
      para= "Special Birthday Cakes Variety"
      btn = "Order Now"
     />

    <Cards 
      src= {prem}
      username = "Premium Cakes"
      para= "Quench Your Sweet Cravings With Our Premium Cakes"
      btn = "Order Now"
     />

    <Cards 
      src= {muffins}
      username = "Premium Muffins"
      para= "Elevate Your Taste With Every Premium Muffin."
      btn = "Order Now"
     />
     </div>


<div className="flex  flex-wrap mt-20 p-10 justify-center ">
  <div className="h-full w-full md:h-[380px] md:w-[320px]">
    <img
      src={back2}
      alt="Laptop"
      className="h-full w-full rounded-md object-cover"
    />
  </div>
  <div>
    <div className="p-4 mt-20">
      <h1 className="inline-flex text-xl items-center font-bold">
        About Cake Stories
      </h1>
      <p className="mt-3 flex flex-wrap text-justify w-[200px] text-sm  text-gray-600 sm: w-[300px} md: w-[500px] ">
      Cake Stories is more than just a bakery; it's where every cake becomes a chapter
      in your life's most cherished moments. Founded on a passion for creativity and 
      excellence, we specialize in crafting custom cakes and premium baked goods that 
      are as unique as your celebrations. Our dedicated team of artisans pours love,
      skill, and imagination into every creation, ensuring that each bite tells a story
      of sweetness, joy, and unforgettable flavor. 
      </p>
      <div class="mt-4">
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Premium
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Bithday Cakes
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Muffins
        </span>
      </div>
      <div class="mt-3 flex items-center space-x-2">
        <img
          class="inline-block h-10 w-10 rounded-full"
          src={logo}
          alt=''
        />
        <span class="flex flex-col">
          <span class="text-[12px] font-medium text-gray-900">Cake Company</span>
          <span class="text-[10px] font-medium text-gray-500">@cake_stories</span>
        </span>
      </div>
    </div>
  </div>
</div>

<div class="mx-auto max-w-8xl my-20 px-2 lg:px-8">
  <div class="grid grid-cols-1 gap-y-10 text-center sm:grid-cols-3 sm:gap-12 lg:grid-cols-3">
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
      <img src={ship}/>
      </div>
      <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
      <p class="mt-4 text-sm text-gray-600">
        Home Delivery
      </p>
    </div>
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
       <img src={money}/>
      </div>
      <h3 class="mt-8 text-lg font-semibold text-black">
        Fast &amp; Easy to Load
      </h3>
      <p class="mt-4 text-sm text-gray-600">
       Money Back Guarantee
      </p>
    </div>
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
       <img src={quality}/>
      </div>
      <h3 class="mt-8 text-lg font-semibold text-black">
        Light &amp; Dark Version
      </h3>
      <p class="mt-4 text-sm text-gray-600">
        100% Quality Products
      </p>
    </div>
</div>
</div>

<Partners />

<section>
  <div className="mx-auto max-w-7xl px-2 lg:px-0 mt-20">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
        Meet Our Team
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
       Our passionate team at Cake Stories pours heart and creativity into every bake,
       ensuring each treat is a masterpiece of flavor and artistry.
      </p>
    </div>
    <div className="mt-8 flex flex-wrap justify-evenly">
      <div>
        <img
          className="h-[400px] w-[280px] rounded-md object-cover"
          src= {rabi}
          alt=""
        />
        <h1 className='text-center font-bold' >Muhammad Rabi</h1>
        <p className='text-center'>CEO</p>

      </div>
      <div>
        <img
          className="h-[400px] w-[280px] rounded-md object-cover"
          src= {dani}
          alt=""
        />
        <h1 className='text-center font-bold'>Daniyal Khan</h1>
        <p className='text-center'>Sales Executive</p>
      </div>
    </div>
  </div>
</section>

<h1 className='text-2xl mt-40 font-bold text-center sm:text-3xl md:text-4xl'> Testinomials </h1>
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

export default Home