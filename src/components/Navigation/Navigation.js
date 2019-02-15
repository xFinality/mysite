import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
	return (
		<nav className='flex items-center vh-5 nav-background bb bt nav-top'>
			<div className='pv0 mv0 links'>
				<p onClick={() => onRouteChange('home')} className='ph3 pv0 mv0 pointer link-nav'>Home</p>
				<p onClick={() => onRouteChange('project')} className='ph3 pv0 mv0 pointer link-nav'>Projects</p>
				<p onClick={() => onRouteChange('about')} className='ph3 pv0 mv0 pointer link-nav'>About me</p>
			</div>
			<div className='mv0 pv0 name'>
				<p className='mv0 pv0'>Thomas Merat</p>
			</div>
			<div className='links-contact'>
				{/*<p onClick={() => onRouteChange('contact')} className=' pr2 mr3 mv0 pv0 pointer link-contact'>Contact</p>*/}
			</div>
		</nav>
		)
}

export default Navigation;