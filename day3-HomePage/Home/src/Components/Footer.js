// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-redfooter pt-10 sm:mt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-between">
        <div className="p-5 sm:w-1/2 md:w-1/4">
          <h3 className="font-bold text-lg mb-2">Services</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile Recharge</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Bill Payment</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Flight Tickets Booking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Train Ticket Booking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Hotel Booking</a></li>
          </ul>
        </div>
        
        <div className="p-5 sm:w-1/2 md:w-1/4">
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliate</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Team</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
          </ul>
        </div>
        
        <div className="p-5 sm:w-1/2 md:w-1/4">
          <h3 className="font-bold text-lg mb-2">Help Center</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
          </ul>
        </div>
        
        <div className="p-5 sm:w-1/2 md:w-1/4">
          <h3 className="font-bold text-lg mb-2">Policies</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Refund Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Grievance Policy</a></li>
          </ul>
        </div>

        <div className="p-5 sm:w-1/2 md:w-1/4">
          <h3 className="font-bold text-lg mb-2">Subscribe</h3>
          <form>
            <div className="flex mb-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button className="p-2 bg-blue-600 text-white rounded-md ml-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600">Subscribe to receive latest offers and updates.</p>
          </form>
        </div>

    
      </div>

      <div className="bg-gray-200 py-2">
        <div className="max-w-6xl m-auto text-gray-800 flex justify-between">
          <div>
            <p>Copyright © 2022 <a href="#" className="text-blue-600 hover:underline">Rahul A</a>. All Rights Reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
