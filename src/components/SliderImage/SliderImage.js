import React from 'react';
import img from './img.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const images = [img,
				img2,
				img3];

const Slider_Image = ({img}) => {
	return(
			<img alt='' src={images[img]}></img>
	)
}

export default Slider_Image;