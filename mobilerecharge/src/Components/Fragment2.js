import React from 'react';
import { FaBolt, FaShieldAlt, FaClock, FaGift } from 'react-icons/fa';

const Fragment2 = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='mt-[100px] flex justify-center min-w-screen h-[500px] mb-[100px]'>
      <div className='items-center bg-white p-80'>
        <div className='font-extrabold font-montserrat  text-5xl text-gray-500 opacity-45 -mt-[300px] text-center'>Why Us?</div>
        <hr className='border-t-1 border-red-600 my-8 w-1/2 mx-auto'/>

        <div className='flex mt-[80px] space-x-10'>

              
                {/* <div className="max-w-sm mx-auto font-poppins  shadow-lg  rounded-[8px]  bg-pinkback overflow-hidden hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="p-6"> 
                    <h2 className="text-2xl font-normal mb-4 text-center">Fast and Efficient</h2>
                    <hr className='border-t-1 border-red-600 my-8 w-1/2 mx-auto'/>
                    <p className=" font-thin">Our streamlined process allows you to complete transactions quickly and effortlessly. With just a few clicks, your mobile is recharged and ready to go.</p>
                    </div>
                </div>  
                
                <div className="max-w-sm mx-auto bg-pinkback shadow-lg font-poppins rounded-[8px]  overflow-hidden hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="p-6">
                    <h2 className="text-2xl font-normal mb-4 text-center">Secure and Reliable</h2>
                    <hr className='border-t-1 border-red-600 my-8 w-1/2 mx-auto'/>
                    <p className="text-gray-700 font-thin">We use advanced security measures to protect your personal and payment information. Our encrypted transactions ensure that your data is always safe.</p>
                    </div>
                </div>
                
                <div className="max-w-sm mx-auto bg-pinkback shadow-lg  font-poppins rounded-[8px] overflow-hidden  hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out ">
                    <div className="p-6">
                    <h2 className="text-2xl font-normal mb-4 text-center">24/7 Availability</h2>
                    <hr className='border-t-1 border-red-600 my-8 w-1/2 mx-auto'/>
                    <p className="text-gray-700 font-thin">Access our services anytime, from anywhere. Whether it's early in the morning or late at night, we’re here to support you around the clock.</p>
                    </div>
                </div>
                
                <div className="max-w-sm mx-auto bg-pinkback shadow-lg font-poppins  rounded-[8px] overflow-hidden  hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="p-6">
                    <h2 className="text-2xl font-normal mb-4 text-center">Exclusive Offers</h2>
                    <hr className='border-t-1 border-red-600 my-8 w-1/2 mx-auto'/>
                    <p className="text-gray-700 font-thin">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge and get the best value for your money.</p>
                    </div>
                </div> */}
                <div className="max-w-sm mx-auto font-poppins shadow-lg rounded-lg bg-white overflow-hidden  border-red-600 hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <FaBolt className="text-3xl text-red-700 mr-2" />
            <h2 className="text-2xl font-semibold  text-center text-red-700">Fast and Efficient</h2>
          </div>
          <hr className='border-t-2 border-red-600 my-8 w-9/12 mx-auto'/>
          <p className="text-gray-600 font-light text-center">Our streamlined process allows you to complete transactions quickly and effortlessly. With just a few clicks, your mobile is recharged and ready to go.</p>
        </div>
      </div>  
      
      <div className="max-w-sm mx-auto shadow-lg font-poppins rounded-lg bg-white overflow-hidden border-red-600 hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <FaShieldAlt className="text-3xl text-red-700 mr-2" />
            <h2 className="text-2xl font-semibold text-center text-red-700">Secure and Reliable</h2>
          </div>
          <hr className='border-t-2 border-red-600 my-8 w-9/12 mx-auto'/>
          <p className="text-gray-600 font-light text-center">We use advanced security measures to protect your personal and payment information. Our encrypted transactions ensure that your data is always safe.</p>
        </div>
      </div>
      
      <div className="max-w-sm mx-auto shadow-lg font-poppins rounded-lg bg-white overflow-hidden border-red-600 hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <FaClock className="text-3xl text-red-700 mr-2" />
            <h2 className="text-2xl font-semibold text-center text-red-700">24/7 Availability</h2>
          </div>
          <hr className='border-t-2 border-red-600 my-8 w-9/12 mx-auto'/>
          <p className="text-gray-600 font-light text-center">Access our services anytime, from anywhere. Whether it's early in the morning or late at night, we’re here to support you around the clock.</p>
        </div>
      </div>
      
      <div className="max-w-sm mx-auto shadow-lg font-poppins rounded-lg bg-white overflow-hidden border-red-600 hover:bg-red-300 hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <FaGift className="text-3xl text-red-700 mr-2" />
            <h2 className="text-2xl font-semibold text-center text-red-700">Exclusive Offers</h2>
          </div>
          <hr className='border-t-2 border-red-600 my-8 w-9/12 mx-auto'/>
          <p className="text-gray-600 font-light text-center">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge and get the best value for your money.</p>
        </div>
      </div>

        </div>
      </div>
    </div>
    </div> 
  );
}

export default Fragment2;
