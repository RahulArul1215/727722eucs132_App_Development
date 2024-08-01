import React from 'react';
import image from '../Resource/image';

const Fragment3 = () => {
  return (
    <div className='flex items-center justify-center -mt-[120px] mb-[50px]'>
    <div className="font-montserrat py-12 ml-4 px-4 sm:px-6 lg:px-8 mt-[100px] w-[1700px] h-[700px] flex justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* image */}
        <div className=" mb-8 lg:mb-0 lg:mr-8 h-[600px] w-[600px]">
          <img src={image.features} width={20} height={20} alt="Features" className="w-full h-auto rounded-lg shadow-lg shadow-red-100" />
        </div>

        {/* content */}
        <div className="flex-1 -mt-5 ml-10">
          <h1 className="text-5xl text-zinc-600 font-bold text-center lg:text-left mb-10">Explore Our Features</h1>

          <div className="space-y-8 ">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  ease-in-out sm:flex-auto">
              <h2 className="text-2xl font-semibold mb-4">Instant Recharges</h2>
              <p className="text-gray-700">
                Top up your phone instantly with our easy-to-use platform. No waiting times, just immediate results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-4">Easy Payment Options</h2>
              <p className="text-gray-700">
                Choose from multiple payment methods including credit/debit cards, net banking, and mobile wallets. Our secure payment gateway ensures a smooth transaction every time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
              <p className="text-gray-700">
                Keep track of all your recharges with our detailed transaction history. Easily view and manage your past transactions for better budgeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Fragment3;
