import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import Presentation from './components/Presentation/Presentation';
import './App.css';

const intialState = {
  route: 'home'
}


class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }

  onRouteChange = (route) => {
    this.setState({route:route});
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
          : <div></div>
        }
        <footer className='vh-5 flex justify-center items-center'>
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
