import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../admin/Dashboard';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
const Routers = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/Home' />} />
			<Route path='/Home' element={<Home />} />
			<Route path='/Contact' element={<Contact />} />
			<Route path='/Menu' element={<Menu />} />
			<Route path='/Login' element={<Login />} />
			<Route path='/Dashboard' element={<Dashboard />} />
		</Routes>
	);
};

export default Routers;
