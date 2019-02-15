import React, {Component} from 'react';
import './About.css'
import resume from './resume.pdf';
import resume2 from './resume2.png';

class About extends Component {
	constructor() {
		super();
		this.state= {
			aboutText:  []/*,
			frontEnd: [],
			backEnd:[],
			developer:[]*/
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/AboutText', {
			method: 'post',
			headers: {'Content-Type' : 'application/json'},
			body: ''
		})
		.then(response => response.json())
		.then(data => {
			this.setState({aboutText:data})
		})

/*		fetch('http://localhost:3000/aboutSkills', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: ''
          })
          .then(response => response.json())
          .then(data => {
      	  	this.getCategorySkills(data);
        	})*/

	}

/*	getCategorySkills = (aboutSkills) => {
		const {frontEnd, backEnd, developer} = this.state;
		aboutSkills.map((skill, i) => {
			switch(skill.category) {
				case 'frontEnd' :
					frontEnd.push(skill);
					break;
				case 'backEnd' :
					backEnd.push(skill);
					break;
				case 'developer' :
					developer.push(skill);
					break;
				default:
					break;
			}
			return (frontEnd, backEnd, developer);
		})
		this.setState({
			frontEnd:frontEnd,
			backEnd:backEnd,
			developer:developer
		})
	}*/

	render() {
		const {aboutText} = this.state;

		return (
			<div className='flex justify-center items-center w-100 h-90 shad'>
				<div className='flex flex-column items-center w-45 h-90'>
					<ol className='flex flex-column items-center w-90 h-100 pa0 list ba shad-card overflow-y-overlay'>
						<h2 className='about-title'>About me and my motivation</h2>
						<div className='flex flex-column items-center'>
						{
							aboutText.map((text, i) => {
								return (
									<li key={i} className='w-80 mb2 mt2'>{text.text}</li>
								)
							})
						}
						</div>
					</ol>
				</div>
				<div className='w-5'></div>
				<div className='w-45 h-90 flex flex-column items-center'>
				{
					<div className='flex flex-column items-center w-90 h-100 shad-card ba mt3 mb3'>
						<a href={resume} className='overflow-y-overlay'>
							<img src={resume2} alt="resume" />
						</a>
						
					</div>
				}
				</div>
			</div>
		)
	}
}

export default About;