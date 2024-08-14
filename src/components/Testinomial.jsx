import React from 'react'

function Testinomial({name, para, src}) {
  return (
<div>
<section className="px-2 py-2 md:px-0 ml-20">
  <div className="mx-auto max-w-6xl">
    <div className="md:flex md:items-center md:justify-center md:space-x-14">
      <div className="relative h-22 w-22 flex-shrink-0">
        <img
          className="relative h-24 w-24 rounded-full object-cover"
          src={src}
          alt=""
        />
      </div>
      <div className="mt-10 md:mt-0">
        <blockquote>
          <p className="text-xl text-black">
            {para}
          </p>
        </blockquote>
        <p className="mt-7 text-lg font-semibold text-black">{name}</p>
        <p className="mt-1 text-base text-gray-600">Customer</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Testinomial