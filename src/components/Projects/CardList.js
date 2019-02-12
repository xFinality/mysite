import React, {Component} from 'react';
import Card from './Card';
import react_logo from './images/react.png';
import html5_logo from './images/html5.png';
import css3_logo from './images/css3.png';
import js_logo from './images/js.png';
import nodejs_logo from './images/nodejs.png';
import clarifai_logo from './images/clarifai.png';
import Searchbox from './Searchbox';

//let logo = [];

class CardList extends Component {
	constructor() {
		super();
		this.state = {
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render() {
		const projects = this.props.projects;
		const {searchfield} = this.state;
		const filteredProjects = projects.filter(project => {
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

		let logo = [];
		return(
			<div className='h-90 flex flex-column items-center overflow-y-scroll shad'>
				<Searchbox searchChange={this.onSearchChange}/>
				{ 
					filteredProjects.map((project, i) => {
						logo = [];
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
								case 'nodejs' :
									logo[i] = nodejs_logo;
									break;
								case 'clarifai' :
									logo[i] = clarifai_logo;
									break;
								default:
									break;
							}
							return logo;
						})

						return(
							<div key={i}>
								<div className='vh-5 '></div>
								<Card
									key={i}
									name={filteredProjects[i].name}
									description={filteredProjects[i].description}
									imageId={filteredProjects[i].imageId}
									skill={logo}/>
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