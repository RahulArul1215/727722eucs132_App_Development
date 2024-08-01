import React from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'tailwindcss/tailwind.css';

// toast.configure();

export const Payment = () => {
  const handlePayment = (paymentMethod) => {
    // toast.success(`${paymentMethod} Payment Successful!`);
    // additional logic for payment handling
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-xl">
        <div className="flex justify-between mb-4">
          <button 
            name="paypal" 
            type="button" 
            onClick={() => handlePayment('PayPal')}
            className="flex items-center justify-center w-1/3 px-4 py-2 border rounded-md"
          >
            <img src="paypal-logo.svg" alt="PayPal" className="h-6"/>
          </button>
          <button 
            name="apple-pay" 
            type="button" 
            onClick={() => handlePayment('Apple Pay')}
            className="flex items-center justify-center w-1/3 px-4 py-2 border rounded-md"
          >
            <img src="apple-pay-logo.svg" alt="Apple Pay" className="h-6"/>
          </button>
          <button 
            name="google-pay" 
            type="button" 
            onClick={() => handlePayment('Google Pay')}
            className="flex items-center justify-center w-1/3 px-4 py-2 border rounded-md"
          >
            <img src="google-pay-logo.svg" alt="Google Pay" className="h-6"/>
          </button>
        </div>

        <div className="flex items-center justify-center my-4">
          <span className="w-1/3 border-b"></span>
          <span className="px-2 text-gray-500">or pay using credit card</span>
          <span className="w-1/3 border-b"></span>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700">Card holder full name</label>
            <input 
              type="text" 
              id="card-holder" 
              placeholder="Enter your full name" 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input 
              type="text" 
              id="card-number" 
              placeholder="0000 0000 0000 0000" 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input 
                type="text" 
                id="expiry-date" 
                placeholder="01/23" 
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input 
                type="text" 
                id="cvv" 
                placeholder="CVV" 
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button 
            type="button" 
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-md focus:outline-none"
            onClick={() => handlePayment('Credit Card')}
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};
export default Payment;