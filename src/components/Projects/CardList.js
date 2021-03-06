import React, {Component} from 'react';
import Card from './Card';
import react_logo from './images/react.png';
import html5_logo from './images/html5.png';
import css3_logo from './images/css3.png';
import js_logo from './images/js.png';
import nodejs_logo from './images/nodejs.png';
import clarifai_logo from './images/clarifai.png';
import robohash_logo from './images/robohash.png';
import redux_logo from './images/redux.png';
import Searchbox from './Searchbox';

import projects from '../../data/projects/projects.js'

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchfield: ''
		}
	}

	componentDidMount() {

/*		fetch('https://sheltered-stream-79649.herokuapp.com/projects', {
          method: 'post',
          headers: {'Content-Type' : 'application/json'},
          body: ''
        })
        .then(response => response.json())
        .then(data => {
        	data.map((project, i) => {
        		project.description = this.props.locales[i].description;
        		project.name = this.props.locales[i].name;
        		return project;
        	})
          this.setState({projects:data});
      })*/
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	getFilteredProjects = (searchfield) => {
		projects.projects.map((project, i) => {
    		project.description = this.props.locales[i].description;
    		project.name = this.props.locales[i].name;
    		return project;
       	})
		return projects.projects.filter(project => {
			return (
				project.skill.map((skill, i) => {
					return skill.toLowerCase().includes(searchfield.toLowerCase());
				}).includes(true) 
				|| 
				project.name.toLowerCase().includes(searchfield.toLowerCase())
				||
				project.description.toLowerCase().includes(searchfield.toLowerCase())
			)

		})
	}

	getProjectSkillLogo = (project, logo) => {
		project.skill.map((skill, i) => {
			switch(skill) {
				case 'html5' :
					logo[i] = html5_logo;
					break;
				case 'css3' :
					logo[i] = css3_logo;
					break;
				case 'js' :
					logo[i] = js_logo;
					break;
				case 'react' :
					logo[i] = react_logo;
					break;
				case 'redux' :
					logo[i] = redux_logo;
					break;
				case 'nodejs' :
					logo[i] = nodejs_logo;
					break;
				case 'clarifai' :
					logo[i] = clarifai_logo;
					break;
				case 'robohash' :
					logo[i] = robohash_logo;
					break;
				default:
					break;
			}
			return logo;
		})
		return logo;
	}

	render() {
		const {searchfield} = this.state;
		const filteredProjects = this.getFilteredProjects(searchfield); 

		let logo = [];
		return(
			<div className='h-90 flex flex-column items-center overflow-y-scroll shad'>
				<Searchbox searchChange={this.onSearchChange}/>
				{ 
					filteredProjects.map((project, i) => {
						logo = [];
						logo = this.getProjectSkillLogo(project,logo);

						return(
							<div key={i}>
								<div className='vh-5 '></div>
								<Card
									key={i}
									name={filteredProjects[i].name}
									description={filteredProjects[i].description}
									imageId={filteredProjects[i].imageId}
									skill={logo}
									git={filteredProjects[i].git}/>
									{ i === filteredProjects.length-1 ?
											<div className='vh-5 '></div>
										:
										<div></div>
									}
							</div>
							)
					})

				}
			</div>
		)
	}
}

export default CardList;