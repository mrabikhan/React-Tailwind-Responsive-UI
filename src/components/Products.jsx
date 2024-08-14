import React from 'react'
import black from '../assets/black.jpg'
import muffin from '../assets/muffin.webp'
import fruit from '../assets/fruitcake.jpg'
import pine from '../assets/pine.jpg'


function Products() {
  return (
    <div>
    <h1 className='p-7 mx-5 text-2xl font-bold'>Order Products</h1>
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
  <div class="rounded-md border">
    <img
      src={pine}
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        Fresh Pineapple Cake
      </h1>
      <p className="mt-3 text-sm text-gray-600 truncate">
        Ready with fresh cream and imported pinapples
      </p>
      <div className="mt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Cakes
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #BirthdayCake
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #CupCake
        </span>
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block text-sm font-semibold"> PKR 3500/- </span>
        </div>
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Size : </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          2 Pound
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          3 Pound
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          5 Pound
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  <div className="rounded-md border">
    <img
      src={black}
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        Black Forest Cake
      </h1>
      <p className="mt-3 text-sm text-gray-600">
      Savour The Sweetness Of Every Slice
      </p>
      <div className="mt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Chocolate
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #LotusCake
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #3MilkCake
        </span>
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block text-sm font-semibold"> PKR 3000/- </span>
        </div>
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Size : </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          2 Pound
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          3 Pound
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          5 Pound
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  <div className="rounded-md border">
    <img
      src={fruit}
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        Fruit Punch Cheese Cake
      </h1>
      <p className="mt-3 text-sm text-gray-600 truncate">
        Give your taste buds a delightful ride of fruity world 
      </p>
      <div className="mt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Birthdays
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Muffins
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Cakes
        </span>
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block text-sm font-semibold"> PKR 4000/- </span>
        </div>
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Size : </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          2 Pound
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          3 Pound
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          5 Pound
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  <div className="rounded-md border">
    <img
      src={muffin}
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        Premium Vanila Muffin
      </h1>
      <p className="mt-3 text-sm text-gray-600 truncate">
        Delicious Freshly Baked Soft Muffins  
      </p>
      <div className="mt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Birthday
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Muffins
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Customized
        </span>
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block text-sm font-semibold"> PKR 1000/- </span>
        </div>
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Size: </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          Pack Of 2
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          Pack Of 4
        </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          Pack Of 8
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>

<div className='flex justify-center p-10'>
<div className="flex items-center">
  <a
    href="#"
    class="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
  >
    ← Previous
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    1
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    2
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    3
  </a>
  <a
    href="#"
    class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    4
  </a>
  <a href="#" class="mx-2 text-sm font-semibold text-gray-900">
    Next →
  </a>
</div>
</div>
</div>
)
}

export default Products