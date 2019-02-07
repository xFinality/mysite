import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
	return (
		<nav className='flex items-center vh-5 nav-background bb bt'>
			<div className='flex items-center pv0 mv0 w-third'>
				<p onClick={() => onRouteChange('home')} className='ph3 pv0 mv0 link pointer'>Home</p>
				<p onClick={() => onRouteChange('project')} className='ph3 pv0 mv0 link pointer'>Project</p>
				<p onClick={() => onRouteChange('about')} className='ph3 pv0 mv0 link pointer'>About me</p>
			</div>
			<div className='flex flex-column justify-center items-center mv0 pv0 w-third'>
				<p className='mv0 pv0'>Thomas Merat</p>
			</div>
			<div className='flex items-center w-third'>
				<p onClick={() => onRouteChange('contact')} className='ml-auto pr2 mr3 mv0 pv0 link pointer'>Contact</p>
			</div>
		</nav>
		)
}

export default Navigation;