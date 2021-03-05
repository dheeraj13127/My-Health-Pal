import React, { Component } from "react";
import './Landing.css'
import PhotoSection from './componentsLanding/PhotoSection'
import HeaderLanding from "./componentsLanding/HeaderLanding";
import ParallaxContainer from "./componentsLanding/ParallaxContainer";
import Footer from "./componentsLanding/Footer";
class Landing extends Component {
  // componentDidMount(){
  //   window.location.reload()
  // }
  render() {
    
    return (
      <div>
        <HeaderLanding/>
        <PhotoSection/>
        <ParallaxContainer/>
        <Footer/>
      </div>

    )
  }
}

export default Landing;