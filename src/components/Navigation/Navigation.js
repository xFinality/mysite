import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, locales, changeLocale}) => {
	return (
		<nav className='flex items-center vh-5 nav-background bb bt nav-top'>
			<div className='pv0 mv0 links'>
				<p onClick={() => onRouteChange('home')} className='ph3 pv0 mv0 pointer link-nav'>{locales.index}</p>
				<p onClick={() => onRouteChange('project')} className='ph3 pv0 mv0 pointer link-nav'>{locales.projects}</p>
				<p onClick={() => onRouteChange('about')} className='ph3 pv0 mv0 pointer link-nav'>{locales.about}</p>
			</div>
			<div className='mv0 pv0 name'>
				<p className='mv0 pv0'>Thomas Merat</p>
			</div>
			<div className='links-contact'>
				<p onClick={() => changeLocale()} className=' pr2 mr3 mv0 pv0 pointer link-contact'>en / fr</p>
				{/*<p onClick={() => onRouteChange('contact')} className=' pr2 mr3 mv0 pv0 pointer link-contact'>Contact</p>*/}
			</div>
		</nav>
		)
}

export default Navigation;