import React from 'react';
import './Presentation.css';
import logoHtml from './img/html5-js-css3-logo.png';
import logoReact from './img/react-logo.png';

const Presentation = () => {
	return(
		<div className='pt1 bt bb vh-40 w-100 pres'>
			<div className='h-50 w-100 mt0 pt0'>
				<p>Welcome to my website !</p>
				<p>Hi, I'm Thomas. I'm a developer. Welcome to my website. <br/>
					Here you will see my projects done in the 'Project' section. <br/>
					You can also find more informations about me in the 'About me' section. <br/>
					And you can contact me in the 'Contact' section.<br/>
					Enjoy your time here !
				</p>
			</div>
			<div className='h-50 w-50 center relative'>
				<img alt='' src={logoHtml}  className='logo'/>
				<img alt='' src={logoReact}  className='logo'/>
			</div>
		</div>
	)
}

export default Presentation;