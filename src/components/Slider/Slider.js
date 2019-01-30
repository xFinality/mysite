import React from 'react';
import './Slider.css';

const Slider= () => {
	return (
		<div className='flex flex-column  vh-50 '>
			<div className='flex items-center justify-center bt bb h-95 w-100 overflow-hidden'>
				<div className='w-button h-100 flex flex-column items-center justify-center'>
					<div className='arrow button-prev'></div>
				</div>
				<div className='w-50 h-100'>test</div>
				<div className='w-button h-100 flex flex-column items-center justify-center'>
					<div className='arrow button-next'></div>
				</div>
			</div>
			<div className='flex items-center justify-center bt bb w-100 h-5 mv0 pv0'>
				<div className='mr2 circle'></div>
				<div className='mr2 circle'></div>
				<div className='mr2 circle'></div>
			</div>
		</div>
		)
}

export default Slider;