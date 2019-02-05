import React, {Component} from 'react';
import './Slider.css';
import './Arrow.css';
import './Circle.css';
import SliderImage from '../SliderImage/SliderImage';

const initialState = {
	oldImage: 2,
	image: 0,
	nextImage: 1,
	imageStyle: '',
	arrowLock: false
}

class Slider extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onClickArrow = (direction) => {
		const {image, nextImage, oldImage, arrowLock} = this.state;
		this.setState({imageStyle:'img'});
		if(direction === 'prev' && !arrowLock){
			this.setState({imageStyle:'img2'});
			this.setState({image:oldImage, oldImage:nextImage, nextImage:image})
		}
		else if(direction ==='next' && !arrowLock){
			this.setState({imageStyle:'img'});
			this.setState({image:nextImage, oldImage:image, nextImage:oldImage})
		}
		this.setState({arrowLock: true});
	}

	unlockArrow = () => {
		this.setState({arrowLock:false})
	}

	onClickCircle = (oldImg, img, nextImg) => {
		if(this.state.image > img) {
			this.setState({image:img, oldImage:oldImg, nextImage:nextImg})
			this.setState({imageStyle:'img2'});
		} else if (this.state.image < img) {
			this.setState({image:img, oldImage:oldImg, nextImage:nextImg})
			this.setState({imageStyle:'img'});
		}

	}

	render() {
		const {oldImage, image, nextImage} = this.state;
		return(
			<div className='flex flex-column  vh-50 '>
				<div className='flex items-center justify-center bt bb h-95 w-100 overflow-hidden'>
					<div  className='w-button h-100 flex flex-column items-center justify-center'>
						<div onClick={() => this.onClickArrow('prev')} className='arrow button-prev pointer'></div>
					</div>
					<div className='w-50 h-100 overflow-hidden'>
						<SliderImage unlockArrow={this.unlockArrow} anim={this.state.imageStyle} nextImg={nextImage} oldImg={oldImage} img={image}/>
					</div>
					<div className='w-button h-100 flex flex-column items-center justify-center'>
						<div onClick={() => this.onClickArrow('next')} className='arrow button-next pointer'></div>
					</div>				
				</div>
{/*				<div className='flex items-center justify-center bt bb w-100 h-5 mv0 pv0'>
					<div onClick={() => this.onClickCircle(2,0,1)} className='mr2 circle'></div>
					<div onClick={() => this.onClickCircle(0,1,2)} className='mr2 circle'></div>
					<div onClick={() => this.onClickCircle(1,2,0)} className='mr2 circle'></div>
				</div>*/}
			</div>
		)
	}
}

export default Slider;