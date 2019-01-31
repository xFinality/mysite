import React, {Component} from 'react';
import './Slider.css';
import Arrow from '../Arrow/Arrow';
import Circle from '../Circle/Circle';
import SliderImage from '../SliderImage/SliderImage';

const initialState = {
	image: 0
}

class Slider extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onClickArrow = (direction) => {
		const {image} = this.state;
		if(direction === 'prev')
			if(image === 0)
				this.setState({image: 2});
			else
				this.setState({image:image-1});
		else if(direction ==='next')
			if(image === 2)
				this.setState({image: 0});
			else
				this.setState({image:image+1});
	}

	render() {
		const {image} = this.state;
		return(
			<div className='flex flex-column  vh-50 '>
				<div className='flex items-center justify-center bt bb h-95 w-100 overflow-hidden'>
					<Arrow onClickArrow={() => this.onClickArrow('prev')} direction='button-prev'/>
					<div className='w-50 h-100'>
						<SliderImage img={image}/>
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