import React from 'react';

const MembershipProgram = () => {
  return (
    <div className="bg-pinkback py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-poppins text-3xl sm:text-4xl md:text-4xl font-semibold mb-4">Join Our Membership Program</h1>

            <hr className='border-t-1 border-red-600 w-10/12 mb-4 mx-auto'/>
        <p className="font-poppins text-lg sm:text-lg mb-10">Unlock Exclusive Benefits with PulseTopUp Membership!</p>
        <div className="border-t-1 text-sm border-red-600 w-[400px] mx-auto mb-12 "></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[70px] px-1">
          <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">
            <h2 className="font-poppins text-3xl font-semibold mb-2">Basic</h2>
            <p className="text-gray-600 mb-4"></p>
            <h3 className="text-gray-700 font-montserrat text-2xl font-medium mb-4">Free to join!</h3>
            <hr className='border-t-1 border-red-600 my-8 w-2/2 mx-auto'/>
            <h4 className="font-poppins text-lg font-semibold mb-4">Checkout Benefits</h4>
            <ul className="list-disc list-inside text-left mb-8 ml-2">
              <li className='font-poppins'>5% Off on Every Recharge: Enjoy immediate savings on all your recharges.</li>
              <li className='font-poppins '>1% Cashback: Earn cashback on every transaction, redeemable for future recharges.</li>
              <li className='font-poppins '>Access to Basic Offers and Promotions: Get notified about special deals and discounts.</li>
            </ul>
            <button className="bg-red-600 text-white font-poppins font-semibold py-2 px-4 rounded hover:bg-red-500 mt-[100px]">Get Started</button> 
          </div>
          
          <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">
            <h2 className="font-poppins text-3xl font-semibold mb-2">Premium</h2>
            <p className="text-gray-600 mb-4"></p>
            <h3 className="text-gray-700 font-montserrat text-2xl font-medium mb-4">₹99/month or ₹999/year</h3>
            <hr className='border-t-1 border-red-600 my-8 w-2/2 mx-auto'/>
            <h4 className="font-poppins text-lg font-semibold mb-4">Checkout Benefits</h4>
            <ul className="list-disc list-inside text-left mb-11 ml-2 ">
              <li className='font-poppins '>15% Off on Every Recharge: Significant savings on all your mobile top-ups.</li>
              <li className='font-poppins '>5% Cashback: Higher cashback rate for all transactions.</li>
              <li className='font-poppins '>Exclusive Deals: Access to special promotions available only to premium members.</li>
              <li className='font-poppins '>Priority Support: Faster response times and dedicated support.</li>
              <li className='font-poppins '>Bonus Points: Earn points with every recharge, which can be redeemed for exciting rewards</li>
            </ul>
            <button className="bg-red-600 text-white font-poppins font-semibold py-2 px-4 rounded hover:bg-red-500">Get Started</button>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">
            <h2 className="font-poppins text-3xl font-semibold mb-2">Golden</h2>
            <p className="text-gray-600 mb-4"></p>
            <h3 className="text-gray-700 font-montserrat text-2xl font-medium mb-4">₹199/month or ₹1999/year</h3>
            <hr className='border-t-1 border-red-600 my-8 w-2/2 mx-auto'/>
            <h4 className="font-poppins text-lg font-semibold mb-4">Checkout Benefits</h4>
            <ul className="list-disc list-inside text-left mb-5 ml-2">
              <li className='font-poppins '>25% Off on Every Recharge: Maximum savings on all your recharges.</li>
              <li className='font-poppins '>10% Cashback: Highest cashback rate for all transactions.</li>
              <li className='font-poppins '>Exclusive Deals: Access to premium promotions and offers.</li>
              <li className='font-poppins '>Priority Support: Top-tier support with the fastest response times.</li>
              <li className='font-poppins '>Double Bonus Points: Earn double points with every recharge, redeemable for premium rewards.</li>
              <li className='font-poppins '>Free Monthly Recharges: Get one free recharge (up to ₹100) every month.</li>
            
            </ul>
            <button className="bg-red-600 text-white font-poppins font-semibold py-2 px-4 rounded hover:bg-red-500 ">Get Started</button>
          </div>
        </div>
            {/* <button className="bg-red-500 text-white font-poppins font-semibold py-2 px-4 rounded hover:bg-red-600 mt-[70px] mb-[30px] w-[300px]">Get Started</button> */}
      </div>
    </div>
  );
};

export default MembershipProgram;
