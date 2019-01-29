import React from 'react';

const Navigation = () => {
	return (
		<nav className='flex items-center '>
			<div className='flex items-center pv0 mv0 w-third'>
				<p className='ph2 pv0 mv0 br'>Home</p>
				<p className='ph2 pv0 mv0 br'>Project</p>
				<p className='ph2 pv0 mv0 br'>About me</p>
			</div>
			<div className='flex flex-column justify-center items-center mv0 pv0 w-third'>
				<p className='mv0 pv0'>Thomas MERAT</p>
				<p className='pv0 mv0'>Developer</p>
			</div>
			<div className='flex items-center w-third'>
				<p className='ml-auto pr2 mv0 pv0'>Contact</p>
			</div>
		</nav>
		)
}

export default Navigation;