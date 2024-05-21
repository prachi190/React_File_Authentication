import React from 'react';
import reportData from '../reportData'; // Importing sample data

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Reports</h3>
      <ul>
        {reportData.map((report, index) => (
          <li key={index}>{report.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
