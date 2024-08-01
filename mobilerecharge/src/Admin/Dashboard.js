import React from 'react';
import SummaryMetrics from './SummaryMetrics';
import RecentActivity from './RecentActivity';
import NotificationsAlerts from './NotificationsAlerts';

function Dashboard() {
  return (
  <div>
    <div className='flex h-[200px] border-t border-b'>
        <h2 className="text-5xl font-poppins font-semibold mt-[140px]">Admin Portal</h2>
      </div>
    <div className="space-y-4">
      <SummaryMetrics />
      <RecentActivity />
      <NotificationsAlerts />
    </div>
    </div>
  );
}

export default Dashboard;
