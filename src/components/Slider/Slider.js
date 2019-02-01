import React, {Component} from 'react';
import './Slider.css';
import Arrow from '../Arrow/Arrow';
import Circle from '../Circle/Circle';
import SliderImage from '../SliderImage/SliderImage';

const initialState = {
	oldImage: 0,
	image: 0,
	imageStyle: ''
}

class Slider extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onClickArrow = (direction) => {
		const {image} = this.state;
		this.setState({oldImage:image});
		this.setState({imageStyle:'img'});
		if(direction === 'prev'){
			if(image === 0){
				this.setState({image: 2});
			}
			else{
				this.setState({image:image-1});
			}
		}
		else if(direction ==='next'){
			if(image === 2){
				this.setState({image: 0});
			}
			else{
				this.setState({image:image+1});
			}
		}
	}

	render() {
		const {oldImage, image} = this.state;
		//console.log(oldImage, image, this.state.imageStyle)
		return(
			<div className='flex flex-column  vh-50 '>
				<div className='flex items-center justify-center bt bb h-95 w-100 overflow-hidden'>
					<Arrow onClickArrow={() => this.onClickArrow('prev')} direction='button-prev'/>
					<div className='w-50 h-100'>
						<SliderImage anim={this.state.imageStyle} oldImg={oldImage} img={image}/>
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