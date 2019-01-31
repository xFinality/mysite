import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
	return (
		<nav className='flex items-center vh-5'>
			<div className='flex items-center pv0 mv0 w-third'>
				<p onClick={() => onRouteChange('home')} className='ph2 pv0 mv0 br link pointer'>Home</p>
				<p onClick={() => onRouteChange('project')} className='ph2 pv0 mv0 br link pointer'>Project</p>
				<p onClick={() => onRouteChange('about')} className='ph2 pv0 mv0 br link pointer'>About me</p>
			</div>
			<div className='flex flex-column justify-center items-center mv0 pv0 w-third'>
				<p className='mv0 pv0'>Thomas MERAT</p>
				<p className='pv0 mv0'>Developer</p>
			</div>
			<div className='flex items-center w-third'>
				<p onClick={() => onRouteChange('contact')} className='ml-auto pr2 mv0 pv0 link pointer'>Contact</p>
			</div>
		</nav>
		)
}

export default Navigation;