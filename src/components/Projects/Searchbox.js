import React from 'react';
import './Searchbox.css';

const Searchbox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2 mt4'>
			<input 
			className='pa3 ba shad-searchbox searchbox'
			type='search' 
			placeholder='search skill or keywords'
			onChange={searchChange}
			/>
		</div>
		);
}

export default Searchbox;