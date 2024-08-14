import React from 'react'

function Faqs() {
  return (
    <div>
<section className="px-2">
  <div className="mx-auto max-w-7xl py-10">
    <div>
      <div className="w-full">
        <h1 className="text-4xl text-center font-bold  text-black">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <div className="rounded-md border border-black/30 p-6">
          <dt className="text-lg font-semibold leading-6 text-gray-900">
          What types of cakes do you offer?
          </dt>
          <dd className="mt-2 text-sm text-gray-500">
          We offer a wide variety of cakes including classic flavors like vanilla,
          chocolate, and red velvet. Whether you're looking for a birthday cake, a wedding cake,
          or a custom creation, we can craft the perfect cake for your occasion.

          </dd>
        </div>
        <div className="rounded-md border border-black/30 p-6">
          <dt className="text-lg font-semibold leading-6 text-gray-900">
          How far in advance should I place my order?
          </dt>
          <dd className="mt-2 text-sm text-gray-500">
          We recommend placing your cake order at least 2-3 days in advance for standard cakes
          and 1 week in advance for custom or large orders, such as wedding cakes.
          This allows us to ensure we have ample time to design, bake, and perfect your cake. 
          </dd>
        </div>
        <div className="rounded-md border border-black/30 p-6">
          <dt className="text-lg font-semibold leading-6 text-gray-900">
          Do you offer custom cake designs?
          </dt>
          <dd className="mt-2 text-sm text-gray-500">
          Absolutely! At Cake Stories, we specialize in creating custom cake designs
          tailored to your specific needs. Whether you have a specific theme, color scheme,
          or design in mind, our talented bakers and decorators will work with you to bring your
          vision to life.
          </dd>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Faqs