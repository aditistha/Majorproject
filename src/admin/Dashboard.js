import React from 'react';
import '../css/Dashboard.css';
import Maindashboard from './Maindashboard';
import Sidebar from './Sidebar';
function Dashboard() {
	return (
		<div className='background'>
			<div className='glass-bg'>
				<Sidebar />
				<Maindashboard />
			</div>
		</div>
	);
}

export default Dashboard;
