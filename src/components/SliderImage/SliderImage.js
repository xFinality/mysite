import React, {Component} from 'react';
import img from './img.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './SliderImage.css';

const images = [img,
				img2,
				img3];

const initialState = {
	anim:'',
	oldImg:2,
	img:0,
	nextImg: 1,
	newStyle: 'image w-third moveLeft-third'
}

class Slider_Image extends  Component {
	constructor(props){
		super(props);
		console.log(initialState)
		this.state = initialState;
	}

	arrowClicked = () => {
		return this.setState({
			img:this.props.img,
			oldImg:this.props.oldImg,
			nextImg:this.props.nextImg,
			anim:this.props.anim,
			newStyle: 'w-third moveLeft-third'
		});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.img!==prevState.img)
			return {
					newStyle:prevState.newStyle+' image '+nextProps.anim};
		else return null;
	}

	render() {
		const {oldImg, img, nextImg, newStyle} = this.state;

		return(
				<div className='flex align-center overflow-hidden h-100 w-300'>
					<img className={newStyle} alt='' src={images[oldImg]}/>
					<img className={newStyle} alt='' src={images[img]} />
					<img className={newStyle} onTransitionEnd={this.arrowClicked} alt='' src={images[nextImg]} />
				</div>
		)
	}
}

export default Slider_Image;