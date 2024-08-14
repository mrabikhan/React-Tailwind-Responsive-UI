import React from 'react'


function Cards({src, username, para, btn}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src= {src}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
     {para}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm 
    font-semibold bg-blue-500 text-white p-4 rounded-sm hover:bg-blue-700">
      {btn} →
    </button>
  </div>
</div>
  )
}

export default Cards