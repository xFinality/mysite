import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2 mt4'>
			<input 
			className='pa3 ba '
			type='search' 
			placeholder='search skill'
			onChange={searchChange}
			/>
		</div>
		);
}

export default Searchbox;