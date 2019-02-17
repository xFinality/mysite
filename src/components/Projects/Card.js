import React from 'react';
import './Card.css';

const Card = ({name, description, imageId, skill}) => {
	let img_src= '';
	if(imageId !==0) {
		img_src = require(`./images/img${imageId}.jpg`);
	} else {
		img_src = require(`./images/img.jpg`);
	}
	return(
		<div className='vw-75 flex content-stretch card-width ba shad-card card-container'>
			<img className='card-component h-100 br br-yellow' alt='project' src={img_src} />
			<div className='card-component h-95 self-center flex flex-column'>
				<h2 className='mt1 card-title'>{name}</h2>
				<p className='center w-75 h-50 tj'>{description}</p>
				<div className='flex flex-wrap items-center justify-center mt2 logos'>
					{skill.map((skill, i) => {
						return <img className='logo-card mr3 mb2' alt='' src={skill} key={i} />
					})}
				</div>
			</div>
		</div>
	)

}

export default Card;