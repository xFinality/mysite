import React from 'react';
import './Presentation.css';

import logoEmail from './img/email2.png';
import logoGitHub from './img/github_white.png';
import logoLinkedIn from './img/linkedin2.png';

const Presentation = (props) => {
	return(
		<div className='pt1 bt bb vh-40 w-100 pres shad-card'>
			<div className='flex flex-column justify-center items-center h-50 w-100 mt0 pt0'>
				<p className='pres-title mt0 mb0'>{props.locales.title}</p>
				<p className='pres-text tj w-50  overflow-y-overlay'>{props.locales.text}

				{/*Hi, I'm Thomas. I'm a developer. Welcome to my website.<br/> 
					Here you will see my projects done in the 'Project' section. <br/>
					You can also find more informations about me in the 'About me' section.<br/>
					And you can contact me with the logos below.<br/>
					Enjoy your time here !*/}
				</p>
			</div>
			<div className='h-50 w-100 center'>
				<a href="mailto:merat.thomas@gmail.com" ><img alt='' src={logoEmail}  className='logo logo1'/></a>
				<a href="https://github.com/xFinality" ><img alt='' src={logoGitHub}  className='logo logo2'/></a>
				<a href="https://www.linkedin.com/in/thomasmerat" ><img alt='' src={logoLinkedIn}  className='logo logo3'/></a>
			</div>
		</div>
	)
}

export default Presentation;