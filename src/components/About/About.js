import React, {Component} from 'react';
import './About.css'
import resume from './resume.pdf';
import resume2 from './resume2.png';

class About extends Component {
	constructor() {
		super();
		this.state= {
			aboutText:  [],
			show: 'motivation',
			style1:{},
			style2: {}/*,
			frontEnd: [],
			backEnd:[],
			developer:[]*/
		}
	}

	componentDidMount() {
		fetch('https://sheltered-stream-79649.herokuapp.com/AboutText', {
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

	onShowChange = (show) => {
		this.setState({show:show});
		if(show === 'resume') {
			this.setState({style1: {
				display:'none'
			},
			style2: {
				display:'flex'
			}})
		} else if(show === 'motivation') {
			this.setState({style1: {
				display:'flex'
			},
			style2: {
				display:'none'
			}})
		}
	}

	render() {
		const {aboutText, style1, style2} = this.state;

		return (
			<div className='flex flex-column justify-center items-center w-100 h-90 shad'>
				<div className='flex justify-center items-center mt3 shad-card h-5 w-100 ba about-link'>
					<div className='pointer pr5 about-button' onClick={() => this.onShowChange('motivation')}>Motivation</div>
					<div className='pointer about-button' onClick={() => this.onShowChange('resume')}>Resume</div>
				</div>
				<div className='flex justify-center items-center w-100 h-100 '>
					<div  style={style1} className='flex flex-column items-center w-45 h-90 about-part1'>
						<ol className='flex flex-column items-center w-90 h-100 pa0 list ba shad-card overflow-y-overlay'>
							<h2 className='about-title'>About me and my motivation</h2>
							<div className='flex flex-column items-center'>
							{
								aboutText.map((text, i) => {
									return (
										<li key={i} className='w-80 mb2 mt2 tj'>{text.text}</li>
									)
								})
							}
							</div>
						</ol>
					</div>
					<div style={style2} className='w-45 h-90 flex-column items-center about-part2'>
					{
						<div className='flex flex-column items-center w-90 h-100 shad-card ba mtb-em overflow-y-overlay'>
							<a href={resume} className=''>
								<img src={resume2} alt="resume" />
							</a>
							
						</div>
					}
					</div>
				</div>
			</div>
		)
	}
}

export default About;