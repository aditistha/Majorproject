import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
	return (
		<nav className='navbar navbar-expand-lg '>
			<div className='container-fluid'>
				<a href='' className='navbar-brand'>
					FOODIE
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to={'/Home'}>
								Home
							</Link>
						</li>
						<li className='nav-item '>
							<Link className='nav-link' to={'/Menu'}>
								Menu
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link'>About</a>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to={'/Contact'}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
