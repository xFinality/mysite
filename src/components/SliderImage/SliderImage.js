import React, {Component} from 'react';
import img from './img.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './SliderImage.css';

const images = [img,
				img2,
				img3];

class Slider_Image extends  Component {
	constructor(props){
		super(props);
		this.state ={
			anim:this.props.anim,
			oldImg:this.props.oldImg,
			img:this.props.img,
			nextImg: this.props.nextImg,
			oldStyle: 'image w-third moveLeft-third',
			newStyle: 'image w-third moveLeft-third',
			nextStyle: 'image w-third moveLeft-third'
		}
	}

	arrowClicked = () => {
		return this.setState({
			img:this.props.img,
			oldImg:this.props.oldImg,
			nextImg:this.props.nextImg,
			anim:this.props.anim,
			oldStyle: 'w-third moveLeft-third',
			newStyle: 'w-third moveLeft-third',
			nextStyle: 'w-third moveLeft-third'
		});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.img!==prevState.img)
			return {
					oldStyle:prevState.oldStyle+' image '+nextProps.anim,
					newStyle:prevState.newStyle+' image '+nextProps.anim,
					nextStyle:prevState.nextStyle+' image '+nextProps.anim};
		else return null;
	}

	render() {
		const {oldImg, img, nextImg, oldStyle, newStyle, nextStyle} = this.state;

		return(
				<div className='flex align-center overflow-hidden h-100 w-300'>
					<img className={oldStyle} alt='' src={images[oldImg]}/>
					<img className={newStyle} alt='' src={images[img]} />
					<img className={nextStyle} onTransitionEnd={this.arrowClicked} alt='' src={images[nextImg]} />
				</div>
		)
	}
}

export default Slider_Image;