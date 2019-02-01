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
			oldStyle: 'z-1 image w-50', //change mh6 to something better
			newStyle: 'z-0 image w-50'
		}
	}

	arrowClicked = () => {
		console.log('test')
		return this.setState({
			img:this.props.img,
			oldImg:this.props.oldImg,
			anim:this.props.anim,
			oldStyle: 'z-1 relative ',
			newStyle: 'z-0 relative '
		});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.img!==prevState.img)
			return {/*img:nextProps.img,
					oldImg:nextProps.oldImg,
					anim:nextProps.anim,*/
					oldStyle:prevState.oldStyle+' image '+nextProps.anim,
					newStyle:prevState.newStyle+' image '+nextProps.anim};
		else return null;
		 //this.arrowClicked();
	}

	// console.log(onAnimationEnd)
	render() {
		const {anim, oldImg, img, oldStyle, newStyle} = this.state;
		//console.log(anim, oldImg, img)
		// let oldStyle = 'z-1 absolute ' + anim;
		// let newStyle = 'z-0 relative ' + anim;
		return(
				<div className='flex align-center overflow-hidden h-100 w-300'>
					<img className={oldStyle} alt='' src={images[oldImg]} />
					{/*<img className='w-third'/>*/}
					<img className={newStyle} onTransitionEnd={this.arrowClicked} alt='' src={images[img]} />
				</div>
		)
	}
}

export default Slider_Image;