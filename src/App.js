import React from 'react';
import Database from './data';
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
      burgerActivity: false,
      burgerClasses: ['burger'],
      menuClasses: ['header__menu']
    }
  }
  changeBurger = (burgerState) => {
    let newBurgerClasses = [...this.state.burgerClasses];
    let newMenuClasses = [...this.state.menuClasses]
    if(burgerState){
      newBurgerClasses=['burger active'];
      newMenuClasses=['header__menu active'];
    }else{
      newBurgerClasses= ['burger'];
      newMenuClasses=['header__menu'];
    }
    this.setState({
      menuClasses: newMenuClasses,
      burgerClasses: newBurgerClasses,
      burgerActivity: !this.state.burgerActivity,
    })
  }
  render(){  
    return (
      <div className="App">
        <Header burgerClasses={this.state.burgerClasses} menuClasses={this.state.menuClasses} changeBurger={() => this.changeBurger(!this.state.burgerActivity)}/>
        <MainBanner/>
        <About title={Database.aboutUsContent.title} subtitle={Database.aboutUsContent.subtitle} description={Database.aboutUsContent.description}/>
        <AppInfo/>
        <Scroller/>
        <Testimonials/>
        <Footer/>
      </div>
    );
  }
}

export default App;
