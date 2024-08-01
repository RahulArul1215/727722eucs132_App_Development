import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

function SummaryMetrics() {
  return (
    <>
    <div className=''>
<h1 className='font-poppins font-semibold text-2xl mt-7'>Profit%</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-4 mb-10">

    <div className=" border border-red-700 p-4 rounded-md shadow-md text-center">
        <div className="text-3xl font-bold text-green-500">Total Transactions</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">1,234</div>
    </div>
    
    <div className=" border border-red-700 p-4 rounded-md shadow-md text-center">
        <div className="text-3xl font-bold text-green-500">Total Revenue</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">₹10,234</div>
    </div>

    <div className=" border border-red-700 p-4 rounded-md shadow-md text-center">
        <div className="text-3xl font-bold text-green-500">Active Users</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">534</div>
    </div>

    <div className=" border border-red-700 p-4 rounded-md shadow-md text-center">
        <div className="text-3xl font-bold text-green-500">Pending Requests</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">8</div>
    </div>
    </div>

    <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-100 w-10/12'></hr>
        </div>

    <h1 className='font-poppins font-semibold text-2xl'>Sim Card Users</h1>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">


      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Airtel Users</div>
          <div className="text-4xl mt-2">1230</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Jio Users</div>
          <div className="text-4xl mt-2">2971</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">BSNL Users</div>
          <div className="text-4xl mt-2">907</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">VI Users</div>
          <div className="text-4xl mt-2">563</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className='mb-9'></div>
    </div>
    </div>
    </>
  );
}

export default SummaryMetrics;
