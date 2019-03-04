import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import Presentation from './components/Presentation/Presentation';

//import CardList from './components/Projects/CardList';
//import About from './components/About/About';

import AsyncComponent from './components/AsyncComponent';

import './App.css';

const intialState = {
  route: 'home',
  language:'en',
  locales:''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = intialState;
  }

  componentWillMount() {
    if(this.state.language === 'en') {
      this.setState({locales:this.props.locales.en})
    } else if (this.state.language === 'fr') {
      this.setState({locales:this.props.locales.fr})
    }
  }

  onRouteChange = (route) => {
    this.setState({route:route});
  }

  changeLocale = () => {
    if(this.state.language === "en"){
      this.setState({language:"fr"})
      this.setState({locales:this.props.locales.fr})
    } else {
      this.setState({language:"en"})
      this.setState({locales:this.props.locales.en})
    }
  }

  render() {
    const {route} = this.state;
    let content;

    if(route === 'project') {
      const AsyncCardList = AsyncComponent(() => import('./components/Projects/CardList'));
      content = <AsyncCardList locales={this.state.locales.projects}/>
    } else if(route ==='about') {
      const AsyncAbout = AsyncComponent(() => import('./components/About/About'));
      content = <AsyncAbout locales={this.state.locales.about}/>   
    }

    return (
      <div className="App vh-100">
        <Navigation onRouteChange={this.onRouteChange} locales={this.state.locales.navigation} changeLocale={this.changeLocale}/>
        { route === 'home'
        ?
          <main>
            <Slider />
            <Presentation locales={this.state.locales.presentation}/>
          </main>
          : route === 'project'
          ?
            content
          : route === 'about'
          ? 
            content
          :<div></div>
        }
        <footer className='absolute bottom-0 w-100 vh-5 flex justify-center items-center bt'>
          <p className='ma-auto'>© Developed and designed by Thomas Merat 2019</p>
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
