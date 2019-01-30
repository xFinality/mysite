import React from 'react';
import './Arrow.css';

const Arrow = ({direction}) => {
	const className = 'arrow ' + direction;
	return(
		<div className='w-button h-100 flex flex-column items-center justify-center'>
			<div className={className}></div>
		</div>
	)
}

export default Arrow;