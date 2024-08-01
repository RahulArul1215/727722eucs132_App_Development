// RechargeForm.js
import React, { useState } from 'react';
import image from '../Resource/image';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

const RechargeForm = () => {
  const [formData, setFormData] = useState({
    type: 'prepaid',
    mobileNumber: '',
    operator: '',
    offer: '',
    amount: ''
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='flex justify-center items-center h-screen -mt-[30px]' >


    <div className="flex justify-center  bg-pinkback w-[1700px] h-[750px] rounded-xl">
    <div className="mr-[70px] place-content-center self-center mt-[0px] ml-6">
      <h1 className=" font-thin text-lg font-poppins">Recharge in Seconds...</h1>
      <h1 className='font-poppins text-4xl font-semibold '>Your Ultimate Mobile Recharge Solution</h1>
      <h2 className=" mt-3 font-medium text-base font-poppins">Enjoy a hassle-free experience with instant mobile recharges for all major <br/> carriers. Our platform ensures that your balance is updated in real-time, so<br/> you never miss a beat.</h2>
      <div className="mt-[20px] ml-[10px]"><img src={image.ph} width={500} height={500}></img></div>
      </div>
  
      <div>
          <div className='mt-[100px] ml-[130px] bg-slate-50 p-3 shadow-md rounded-2xl'>
            <h1 className='font-montserrat text-3xl '>Special Offer: Flat ₹50 off on recharges over <br/>₹200! Enjoy more value with eachtop-up.</h1>
          </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-[40px] ml-[240px] hover:shadow-2xl hover:shadow-red-100">
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
            <option value="operator1">Aitel</option>
            <option value="operator2">Jio</option>
            <option value="operator3">Bsnl</option>
            <option value="operator3">VI</option>
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
            <option value="offer1">1 GB data, 100 minutes, 50 SMS, 7 days.</option>
            <option value="offer2"> 3 GB data, 300 minutes, 100 SMS, 30 days.</option>
            <option value="offer3">5 GB data, 500 minutes, 500 SMS (shared), 30 days.</option>
            <option value="offer3">2 GB data, 200 minutes (international), 100 SMS, 30 days.</option>
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
        <button className="w-full bg-red-600 text-white p-2 rounded-md" onClick={()=>navigate(<Payment/>)}>
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
