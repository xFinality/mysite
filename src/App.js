import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import Presentation from './components/Presentation/Presentation';
import CardList from './components/Projects/CardList';
import './App.css';

const intialState = {
  route: 'home',
  projects: []
}


class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }

  onRouteChange = (route) => {
    this.setState({route:route});
    if(route === 'project' && this.state.projects.length === 0) {
        fetch('http://localhost:3000/projects', {
          method: 'post',
          headers: {'Content-Type' : 'application/json'},
          body: ''
        })
        .then(response => response.json())
        .then(data => {
          this.setState({projects:data});
          // console.log(data)
      })
    }

  }

  render() {
    const {route} = this.state;
    return (
      <div className="App vh-100">
        <Navigation onRouteChange={this.onRouteChange}/>
        { route === 'home'
        ?
          <div>
            <Slider />
            <Presentation />
          </div>
          : route === 'project'
          ?
            <CardList projects={this.state.projects}/>
          : route === 'about'
          ?
            <div>about</div>
          : route === 'contact'
          ?
            <div>contact</div>
          :<div></div>
        }
        <footer className='absolute bottom-0 w-100 vh-5 flex justify-center items-center bt'>
          <p className='ma-auto'>Made by Thomas Merat</p>
        </footer>
{/*        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
      </div>
    );
  }
}

export default App;
