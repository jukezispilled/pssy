import { useState } from 'react';

export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  const sizes = [
    { value: 'small', label: '🥷(small)' },
    { value: 'medium', label: '👨🏻(medium)' },
    { value: 'large', label: '👨🏿(large)' },
  ];

  const productImages = [
    '/p1.png', // Replace with your unique image paths
    '/p2.png',
    '/p3.png',
    '/p4.png',
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-8 bg-pink-300 relative overflow-hidden">
      <div className='absolute top-4 text-xs md:text-lg font-semibold'>CA: updating...</div>

      <img src="lana.png" className='absolute -bottom-[15%] -right-[15%] hidden md:flex z-10'></img>
      <img src="violet.png" className='absolute -bottom-[15%]'></img>
      <img src="texas.png" className='absolute bottom-0 left-0 hidden md:flex'></img>
      <img src="jon.png" className='absolute top-[10%] -right-[15%] w-[35%] -rotate-[33deg] hidden md:flex'></img>

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 z-10 md:pt-0 pt-[7%]">
        <div className="flex flex-col items-center space-y-4">
          <div className="aspect-square w-full relative">
            <img
              alt="Instant Laughter Spray"
              className="object-cover rounded-lg w-full h-full"
              src="/pp.png"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 w-full">
            {productImages.map((image, i) => (
              <div key={i} className="aspect-square w-full relative">
                <img
                  alt={`Product thumbnail ${i + 1}`}
                  className="object-cover rounded-lg w-full h-full"
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div>
            <h1 className="text-3xl font-bold">pocket pussy</h1>
            <div className="flex justify-center items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-current text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.792a1 1 0 00.95.69h3.914c.97 0 1.371 1.24.588 1.81l-3.167 2.3a1 1 0 00-.364 1.118l1.234 3.792c.3.921-.755 1.688-1.54 1.118l-3.167-2.3a1 1 0 00-1.176 0l-3.167 2.3c-.784.57-1.839-.197-1.54-1.118l1.234-3.792a1 1 0 00-.364-1.118l-3.167-2.3c-.783-.57-.383-1.81.588-1.81h3.914a1 1 0 00.95-.69l1.234-3.792z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">4,269 reviews</span>
            </div>
          </div>
          <div className="text-4xl font-bold">$69.69</div>
          <p className="text-gray-600">
            Tired of getting after it alone? Tired of makeshift box? Look no further than the pocket pussy™, for never-ending portable pleasure. Our product is Sins certified and we carry your favorite porn stars box! Get yours today for the low price of $69.69.
          </p>
          <div className="space-y-4 w-full">
            <div className="w-full">
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                Size
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  Select size
                </option>
                {sizes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <a href="https://www.pump.fun/board" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H3m4 8v6a1 1 0 001 1h10a1 1 0 001-1v-6m-6 4h.01M13 9h-2m2 0v3m0-3h3m-3 0H9"
              />
            </svg>
            Add to Cart
          </a>
          <div className="flex justify-between items-center pt-4 border-t w-full">
            <span className="text-sm text-gray-200">In stock - Usually ships within 24 hours</span>
            <div className='flex justify-center items-center z-10'>
                <a href="https://x.com/Pussyonsoll" className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='h-8 md:h-10 md:hover:scale-105 transition ease-in-out duration-150' fill="#00000" viewBox="0 0 50 50">
                    <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                  </svg>
                </a>
                <a href="https://t.me/pussyportalsolanaa" className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-8 md:size-10 md:hover:scale-105 transition ease-in-out duration-150' fill="#0088cc" viewBox="0 0 50 50">
                    <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}