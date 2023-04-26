import React from 'react';

import Routes from '../../routes/Routers';
import Header from '../Header.js';

const Layout = () => {
	return (
		<div>
			<Header />
			<div>
				<Routes />
			</div>
		</div>
	);
};

export default Layout;
