import React from 'react';
import './Arrow.css';

const Arrow = ({onClickArrow, direction}) => {
	const className = 'arrow ' + direction;
	return(
		<div onClick={onClickArrow} className='w-button h-100 flex flex-column items-center justify-center pointer'>
			<div className={className}></div>
		</div>
	)
}

export default Arrow;