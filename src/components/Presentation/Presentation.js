import React from 'react';
import './Presentation.css';
import logoHtml from './img/html5.png';
import logoCSS from './img/css3.png';
import logoJS from './img/js.png';
import logoReact from './img/react-logo.png';

const Presentation = () => {
	return(
		<div className='pt1 bt bb vh-40 w-100 pres'>
			<div className='h-50 w-100 mt0 pt0'>
				<p className='pres-title mt0'>Welcome to my website !</p>
				<p className='pres-text'>Hi, I'm Thomas. I'm a developer. Welcome to my website. 
					Here you will see my projects done in the 'Project' section. 
					You can also find more informations about me in the 'About me' section.
					And you can contact me in the 'Contact' section.<br/>
					Enjoy your time here !
				</p>
			</div>
			<div className='h-50 w-100 center'>
				<img alt='' src={logoHtml}  className='logo logo1'/>
				<img alt='' src={logoCSS}  className='logo logo2'/>
				<img alt='' src={logoJS}  className='logo logo3'/>
				<img alt='' src={logoReact}  className='logo logo4'/>
			</div>
		</div>
	)
}

export default Presentation;