import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
      <>
      <Navbar/>
    <div className="container mx-auto p-6">

      <div className='flex h-[200px] border-t border-b'>
        {/* <div className='h-8 bg-black '>
          <h1 className='font-poppins font-extralight text-xl text-gray-500 '>Get in Touch</h1>
        </div> */}
        <h2 className="text-5xl font-poppins font-semibold mt-[140px]">Contact</h2>
      </div>
      
      
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="flex items-center mt-[150px] mb-6">
            <div>
              <h4 className="text-2xl font-semibold text-gray-700 mb-3">Phone No</h4>
              <p className="text-gray-600 font-medium font-poppins ">121 for Airtel Users and 1800-103-6065 for Non Airtel Users</p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div>
              <h4 className="text-2xl font-semibold text-gray-700 mb-3">Address</h4>
              <p className="text-gray-600 font-medium font-poppins">172A, Avinashi Rd, Periyar Nagar, Hope College, Coimbatore, Tamil Nadu 641014</p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div>
              <h4 className="text-2xl font-semibold text-gray-700 mb-3">Email</h4>
              <p className="text-gray-600 font-medium font-poppins">PulseTopUp2024v@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3 p-4 ">
          <h3 className="font-poppins text-5xl font-semibold gradient-text mt-5 mb-5">How Can I Help You?</h3>
          <form className=" p-6 shadow-lg rounded-lg">
            <div className="flex flex-wrap mb-4 ">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0 ">
                <label htmlFor="name" className="block text-gray-600 mb-2">Full Name:</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="email" className="block text-gray-600 mb-2">Email:</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-600 mb-2">Subject:</label>
              <input type="text" id="subject" name="subject" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-2">Message:</label>
              <textarea id="message" name="message" rows="5" className="w-full p-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" className="w-full p-2 bg-red-600 text-white rounded">Send</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
