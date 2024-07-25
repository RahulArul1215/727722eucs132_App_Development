import React from 'react';
import image from '../Resource/image';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className="flex md:-ml-[250px] md:mr-[200px]">
            <a href="#" className="flex items-center">
              <img src={image.pulse} className="h-8 w-auto" alt="Pulse Logo" />
              <span className="ml-3 text-xl font-bold">PulseTopUp</span>
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ml-[150px]">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-[30px]">
                <a href="#" className="text-gray-700 hover:bg-gray-100 hover:text-redfooter px-3 py-2 rounded-md text-lg font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:bg-gray-100 hover:text-redfooter px-3 py-2 rounded-md text-lg font-medium">Recharge</a>
                <a href="#" className="text-gray-700 hover:bg-gray-100 hover:text-redfooter px-3 py-2 rounded-md text-lg font-medium">BillPayment</a>
                <a href="#" className="text-gray-700 hover:bg-gray-100 hover:text-redfooter px-3 py-2 rounded-md text-lg font-medium">About</a>
                <a href="#" className="text-gray-700 hover:bg-gray-100 hover:text-redfooter px-3 py-2 rounded-md text-lg font-medium">Contact</a>
              </div>
            </div>
          </div>

          <div className="flex items-center sm:-mr-[300px]  sm:justify-end">
            <div className="relative hidden sm:block">
              <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-md border border-gray-300" />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.58 4.58-1.42 1.42-4.58-4.58zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <a href="#" className="ml-[20px]  md:ml-0 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium">Login or SignUp</a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
