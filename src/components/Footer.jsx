import React from 'react'
import logo from '../assets/logo.png'
function Footer() {
  return (
    <div>
    <footer className="w-full bg-gray-900 ">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
    <div className="inline-flex items-center">
    <img src={logo} className='w-20 h-20' />
      <span className="ml-4 text-xl font-bold text-white"> Cake Stories </span>
    </div>
    <div className="hidden items-center md:inline-flex">
      <span className="text-sm font-medium text-white">Ready to Get Started ?</span>
      <button
        type="button"
        className="ml-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Get Started
      </button>
    </div>
  </div>
  <hr className="my-8" />
  <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
    <div className="w-full px-4 md:w-1/2 lg:px-0">
      <h1 className="max-w-sm text-3xl font-bold text-white">Subscribe For New Updates</h1>
      <form action="" className="mt-4 inline-flex w-full items-center  md:w-3/4">
        <input
          className="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Email"
        />
        <button
          type="button"
          className="ml-4 rounded bg-white px-3 py-3 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
        Send
        </button>
      </form>
    </div>
    <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3 p-3">
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-lg font-semibold text-white ">Company</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
          <li>About us</li>
          <li>Company History</li>
          <li>Our Team</li>
          <li>Our Vision</li>
          <li>Press Release</li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-lg font-semibold text-white ">Outlets</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
          <li>DHA PH 2, Lahore</li>
          <li>Lake City, Lahore</li>
          <li>Bahria Town, Lahore </li>
          <li>F11 Markaz, Islamabad</li>
          <li>I9 Sector, Islamabad</li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-lg font-semibold text-white ">Social Media</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Pinterest</li>
          <li>TikTok</li>
        </ul>
      </div>
    </div>
  </div>
  <div className='bg-black p-2'>
    <p className='text-white pl-3'>All Copyrights Reserved By Cake Stories 2024</p>
  </div>
</footer>
    </div>
  )
}

export default Footer