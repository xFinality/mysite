import React from 'react';
import './Slider.css';
import Arrow from '../Arrow/Arrow';
import Circle from '../Circle/Circle';
import SliderImage from '../SliderImage/SliderImage';

const Slider= () => {
	return (
		<div className='flex flex-column  vh-50 '>
			<div className='flex items-center justify-center bt bb h-95 w-100 overflow-hidden'>
				<Arrow direction='button-prev'/>
				<div className='w-50 h-100'>
					<SliderImage />
				</div>
				<Arrow direction='button-next' />
			</div>
			<div className='flex items-center justify-center bt bb w-100 h-5 mv0 pv0'>
				<Circle />
				<Circle />
				<Circle />
			</div>
		</div>
		)
}

export default Slider;