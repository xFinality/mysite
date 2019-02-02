import React, {Component} from 'react';
import './Slider.css';
import Arrow from '../Arrow/Arrow';
import Circle from '../Circle/Circle';
import SliderImage from '../SliderImage/SliderImage';

const initialState = {
	oldImage: 2,
	image: 0,
	nextImage: 1,
	imageStyle: ''
}

class Slider extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onClickArrow = (direction) => {
		const {image, nextImage, oldImage} = this.state;
		this.setState({imageStyle:'img'});
		if(direction === 'prev'){
			this.setState({imageStyle:'img2'});
			this.setState({image:oldImage, oldImage:nextImage, nextImage:image})
		}
		else if(direction ==='next'){
			this.setState({imageStyle:'img'});
			this.setState({image:nextImage, oldImage:image, nextImage:oldImage})
		}
	}

	render() {
		const {oldImage, image, nextImage} = this.state;
		return(
			<div className='flex flex-column  vh-50 '>
				<div className='flex items-center justify-center bt bb h-95 w-100 overflow-hidden'>
					<Arrow onClickArrow={() => this.onClickArrow('prev')} direction='button-prev'/>
					<div className='w-50 h-100 overflow-hidden'>
						<SliderImage anim={this.state.imageStyle} nextImg={nextImage} oldImg={oldImage} img={image}/>
					</div>
					<Arrow onClickArrow={() => this.onClickArrow('next')} direction='button-next' />
				</div>
				<div className='flex items-center justify-center bt bb w-100 h-5 mv0 pv0'>
					<Circle />
					<Circle />
					<Circle />
				</div>
			</div>
		)
	}
}

export default Slider;