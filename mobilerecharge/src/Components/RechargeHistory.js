// import React from 'react';
// import { FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import Footer from './Footer';
// import Navbar from './Navbar';

// const rechargeData = [
//   { id: 1, name: 'Rahul A', sim: 'Airtel', amount: '₹219', date: '2024-07-28', time: '10:45 AM', offerPlan: 'Unlimited Talktime', status: 'Success' },
//   { id: 2, name: 'Kavin A', sim: 'Jio', amount: '₹159', date: '2024-07-27', time: '03:15 PM', offerPlan: '1.5GB/day', status: 'Failed' },
//   { id: 3, name: 'Kavin A', sim: 'VI', amount: '₹299', date: '2024-07-26', time: '09:30 AM', offerPlan: '2GB/day', status: 'Success' },
//   { id: 4, name: 'Haripraveen', sim: 'BSNL', amount: '₹599', date: '2024-07-25', time: '11:00 AM', offerPlan: 'Unlimited Data', status: 'Success' },
//   { id: 5, name: 'Kiran Kumar', sim: 'Airtel', amount: '₹410', date: '2024-07-24', time: '12:15 PM', offerPlan: '500MB/day', status: 'Failed' },
//   { id: 6, name: 'Kirthik', sim: 'Jio', amount: '1299', date: '2024-07-23', time: '01:30 PM', offerPlan: '4GB/day', status: 'Success' },
//   { id: 7, name: 'Kiran Pandiyan', sim: 'VI', amount: '₹219', date: '2024-07-22', time: '02:45 PM', offerPlan: '1GB/day', status: 'Success' },
//   { id: 8, name: 'Larwin J', sim: 'BSNL', amount: '₹256', date: '2024-07-21', time: '03:00 PM', offerPlan: '2GB/day', status: 'Success' },
//   { id: 9, name: 'Prasana Venkatesan', sim: 'Airtel', amount: '₹149', date: '2024-07-20', time: '04:15 PM', offerPlan: 'Unlimited Calls', status: 'Failed' },
//   { id: 10, name: 'Patrick', sim: 'Jio', amount: '₹312', date: '2024-07-19', time: '05:30 PM', offerPlan: '3GB/day', status: 'Success' },
// ];

// function RechargeHistory() {
//   return (
//     <>
//     <Navbar/>
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//     <div className='flex h-[200px] border-t border-b mb-10'>
//         <h2 className="text-5xl font-poppins font-semibold mt-[140px]">Recharge History</h2>
//         </div>
//       <ul className="space-y-4">
//         {rechargeData.map((recharge, index) => (
//           <li
//             key={recharge.id}
//             className={`flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg shadow-md transition duration-300 ${
//               index % 2 === 0 ? 'bg-white' : 'bg-red-50'
//             }`}
//           >
//             <div className="flex items-center space-x-6 mb-2 md:mb-0 w-full md:w-1/4">
//               <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full">
//                 {recharge.status === 'Success' ? <FaRegCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />}
//               </div>
//               <div>
//                 <div className="text-lg font-semibold">{recharge.name}</div>
//                 <div className="text-sm text-gray-600">SIM: {recharge.sim}</div>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-3/4">
//               <div className="text-lg font-semibold w-full md:w-1/5">{recharge.amount}</div>
//               <div className="text-sm text-gray-600 w-full md:w-1/5">{recharge.date}</div>
//               <div className="text-sm text-gray-600 w-full md:w-1/5">{recharge.time}</div>
//               <div className="text-sm text-gray-600 w-full md:w-1/5">Offer: {recharge.offerPlan}</div>
//             </div>
//             <div className={`text-lg font-semibold ${recharge.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
//               {recharge.status}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default RechargeHistory;
import React from 'react';
import { FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Navbar';

const rechargeData = [
    { id: 1, name: 'Rahul A', sim: 'Airtel', amount: '₹219', date: '2024-07-28', time: '10:45 AM', offerPlan: 'Unlimited Talktime', plan: 'Basic', status: 'Success' },
    { id: 2, name: 'Kavin A', sim: 'Jio', amount: '₹159', date: '2024-07-27', time: '03:15 PM', offerPlan: '1.5GB/day', plan: 'Premium', status: 'Failed' },
    { id: 3, name: 'Kavin A', sim: 'VI', amount: '₹299', date: '2024-07-26', time: '09:30 AM', offerPlan: '2GB/day', plan: 'Golden', status: 'Success' },
    { id: 4, name: 'Haripraveen', sim: 'BSNL', amount: '₹599', date: '2024-07-25', time: '11:00 AM', offerPlan: 'Unlimited Data', plan: 'Normal', status: 'Success' },
    { id: 5, name: 'Kiran Kumar', sim: 'Airtel', amount: '₹410', date: '2024-07-24', time: '12:15 PM', offerPlan: '500MB/day', plan: 'Premium', status: 'Failed' },
    { id: 6, name: 'Kirthik', sim: 'Jio', amount: '₹1299', date: '2024-07-23', time: '01:30 PM', offerPlan: '4GB/day', plan: 'Golden', status: 'Success' },
    { id: 7, name: 'Kiran Pandiyan', sim: 'VI', amount: '₹219', date: '2024-07-22', time: '02:45 PM', offerPlan: '1GB/day', plan: 'Normal', status: 'Success' },
    { id: 8, name: 'Larwin J', sim: 'BSNL', amount: '₹256', date: '2024-07-21', time: '03:00 PM', offerPlan: '2GB/day', plan: 'Basic', status: 'Success' },
    { id: 9, name: 'Prasana Venkatesan', sim: 'Airtel', amount: '₹149', date: '2024-07-20', time: '04:15 PM', offerPlan: 'Unlimited Calls', plan: 'Premium', status: 'Failed' },
    { id: 10, name: 'Patrick', sim: 'Jio', amount: '₹312', date: '2024-07-19', time: '05:30 PM', offerPlan: '3GB/day', plan: 'Golden', status: 'Success' },
  ];
  

function RechargeHistory() {
  return (
    <>
      <Navbar />
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex h-[200px] border-t border-b mb-10">
          <h2 className="text-5xl font-poppins font-semibold mt-[140px]">Recharge History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="py-2 px-4 font-semibold font-poppins">Status</th>
                <th className="py-2 px-4 font-semibold font-poppins">Name</th>
                <th className="py-2 px-4 font-semibold font-poppins">SIM</th>
                <th className="py-2 px-4 font-semibold font-poppins">Amount</th>
                <th className="py-2 px-4 font-semibold font-poppins">Date</th>
                <th className="py-2 px-4 font-semibold font-poppins">Time</th>
                <th className="py-2 px-4 font-semibold font-poppins">Offer Plan</th>
                <th className="py-2 px-4 font-semibold font-poppins">Plan</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {rechargeData.map((recharge, index) => (
                <tr
                  key={recharge.id}
                  className={`transition duration-300 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-red-50'
                  }`}
                >
                  <td className="py-2 px-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full">
                      {recharge.status === 'Success' ? <FaRegCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />}
                    </div>
                  </td>
                  <td className="py-2 px-4 text-lg text-gray-600 font-semibold font-poppins">{recharge.name}</td>
                  <td className="py-2 px-4 text-sm text-gray-600 font-medium font-poppins">{recharge.sim}</td>
                  <td className="py-2 px-4 text-lg text-gray-600 font-poppins ">{recharge.amount}</td>
                  <td className="py-2 px-4 text-sm text-gray-600  font-poppins">{recharge.date}</td>
                  <td className="py-2 px-4 text-sm text-gray-600  font-poppins">{recharge.time}</td>
                  <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{recharge.offerPlan}</td>
                  <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{recharge.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RechargeHistory;
