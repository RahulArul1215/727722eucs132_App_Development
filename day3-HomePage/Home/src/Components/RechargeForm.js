// RechargeForm.js
import React, { useState } from 'react';
import image from '../Resource/image';

const RechargeForm = () => {
  const [formData, setFormData] = useState({
    type: 'prepaid',
    mobileNumber: '',
    operator: '',
    offer: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    // <div className=" h-10 w-5 border border-black bg-red-20">
    <div className='flex justify-center items-center h-screen -mt-6'>
    <div className="flex justify-center  bg-pinkback w-[1700px] h-[700px] rounded-xl ">
    <div className="mr-[100px] place-content-center self-center mt-[10px] ">
      <h1 className=" font-thin text-lg font-poppins">Recharge in Seconds...</h1>
      <h1 className='font-poppins text-4xl font-semibold'>Your Ultimate Mobile Recharge Solution</h1>
      <h2 className=" mt-3 font-medium text-base font-poppins">Enjoy a hassle-free experience with instant mobile recharges for all major <br/> carriers. Our platform ensures that your balance is updated in real-time, so<br/> you never miss a beat.</h2>
      <div className="mt-[20px] ml-[10px]"><img src={image.ph} width={500} height={500}></img></div>
      </div>
      <div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-[160px] ml-[100px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Mobile Recharge or Bill Payment</h2>
        <div className="flex justify-center mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="type"
              value="prepaid"
              checked={formData.type === 'prepaid'}
              onChange={handleChange}
              className="mr-2"
            />
            Prepaid
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="postpaid"
              checked={formData.type === 'postpaid'}
              onChange={handleChange}
              className="mr-2"
            />
            Postpaid
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div >
        <div className="mb-4">
          <select
            name="operator"
            value={formData.operator}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Your Operator</option>
            <option value="operator1">Operator 1</option>
            <option value="operator2">Operator 2</option>
            <option value="operator3">Operator 3</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select offers</option>
            <option value="offer1">Offer 1</option>
            <option value="offer2">Offer 2</option>
            <option value="offer3">Offer 3</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="amount"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-full bg-red-600 text-white p-2 rounded-md">
          Continue recharge
        </button>
      </div>
      </div>
      </div>
      </div>
    // </div>
  );
};

export default RechargeForm;
