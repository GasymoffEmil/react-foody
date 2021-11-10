import React from 'react';
import './App.scss';

import Header from './containers/Header';
import MainBanner from './containers/MainBanner';
import About from './containers/About';
import AppInfo from './containers/AppInfo';
import Scroller from './containers/Scroller';
import Footer from './containers/Footer';
import Testimonials from './containers/Testimonials';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){  
    return (
      <div className="App">
        <Header/>
        <MainBanner/>
        <About/>
        <AppInfo/>
        <Scroller/>
        <Testimonials/>
        <Footer/>
      </div>
    );
  }
}

export default App;
