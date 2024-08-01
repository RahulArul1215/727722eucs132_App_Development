// import React from 'react';

// function RecentActivity() {
//   return (
//     <div className="bg-red-50 p-4 rounded shadow">
//       <div className="text-xl font-bold text-red-700">Recent Activity</div>
//       {/* Example content, replace with dynamic content */}
//       <ul>
//         <li className="py-2">User JohnDoe made a transaction</li>
//         <li className="py-2">User JaneDoe registered</li>
//         <li className="py-2">Transaction #123 failed</li>
//       </ul>
//     </div>
//   );
// }

// export default RecentActivity;
import React from 'react';
import { FaUser, FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';

function RecentActivity() {
  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-lg shadow-sm">
      <div className="text-2xl font-bold text-red-600 mb-4">Recent Activity</div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
          <FaRegCheckCircle className="text-red-600 text-xl" />
          <span>User JohnDoe made a transaction</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
          <FaUser className="text-red-600 text-xl" />
          <span>User JaneDoe registered</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
          <FaRegTimesCircle className="text-red-600 text-xl" />
          <span>Transaction #123 failed</span>
        </li>
      </ul>
    </div>
  );
}

export default RecentActivity;
