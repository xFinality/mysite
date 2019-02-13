import React, {Component} from 'react';
import './About.css'

class About extends Component {
	constructor() {
		super();
		this.state= {
			aboutText:  [],
			aboutSkills: [],
			frontEnd: [],
			backEnd:[],
			developer:[]
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

		fetch('http://localhost:3000/aboutSkills', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: ''
          })
          .then(response => response.json())
          .then(data => {
            this.setState({aboutSkills:data});
      	  	this.getCategorySkills(this.state.aboutSkills);
        	})

	}

	getCategorySkills = (aboutSkills) => {
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
	}

	render() {
		const {aboutText, frontEnd, backEnd, developer} = this.state;

		return (
			<div className='flex justify-center items-center w-100 h-90 shad'>
				<div className='flex flex-column items-center w-45 h-90'>
					<ol className='flex flex-column items-center w-90 h-100 pa0 list ba shad-card overflow-y-overlay'>
						<h3>About me and my motivation</h3>
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
				<div className='w-45 h-90'>
				{
					<div className='flex flex-column items-center h-100'>
						<ol className='flex flex-column flex-wrap items-center w-90 h-100 pa0 list ba shad-card'>
							<h3>Front End Skills</h3>
							<div className='flex flex-wrap items-center'>
							{
								frontEnd.map((skill, i) => {
									return (
										<li key={i} className='ml4'>{skill.name}</li>
									)
								})
							}
							</div>
						</ol>
						<ol className='flex flex-column flex-wrap items-center w-90 h-100 pa0 list ba shad-card'>
							<h3>Back End Skills</h3>
							<div className='flex flex-wrap items-center'>
							{
								backEnd.map((skill, i) => {
									return (
										<li key={i} className='ml4'>{skill.name}</li>
									)
								})
							}
							</div>
						</ol>
						<ol className='flex flex-column flex-wrap items-center w-90 h-100 pa0 list ba shad-card'>
							<h3>Developer Skills</h3>
							<div className='flex flex-wrap items-center'>
							{
								developer.map((skill, i) => {
									return (
										<li key={i} className='ml4'>{skill.name}</li>
									)
								})
							}
							</div>
						</ol>
					</div>
/*					aboutSkills.map((skill, i) => {
						return (
							<p key={i}>{skill.name}</p>
						)
					})*/
				}
				</div>
			</div>
		)
	}
}
/*const About = (about_text, about_skills) => {
// = about_text;

	fetch('http://localhost:3000/AboutText', {
		method: 'post',
		headers: {'Content-Type' : 'application/json'},
		body: ''
	})
	.then(response => response.json())
	.then(data => {
		console.log(data[0].text)
		t=data[0].text;
		return t;
	})

	console.log(t)

	//console.log(t)
	return (
			<div className='flex justify-center items-center w-100 h-90 shad'>
				<div className='w-45 h-90 shad-card'>
				{
					/*t.map((text, i) => {
						return (
							<p>text.text</p>
						)
					})
				}
				</div>
				<div className='w-5'></div>
				<div className='w-45 h-90 shad-card'>
					skillss
				</div>
			</div>
	)

}*/

export default About;