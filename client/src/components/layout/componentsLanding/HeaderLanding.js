import React, { Component } from 'react'
import '../Landing.css'
import {Link} from 'react-router-dom'

export default class HeaderLanding extends Component {
  componentDidMount(){
  
    const M=window.M;
   document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems,{});
   });
    
   }
    render() {
        return (
            <header className="landingHeader">
            <nav className="nav-wrapper transparent">
              <div className="container">
                <a href="" className="brand-logo headerTitle" style={{fontSize:"15px"}}>My Health Pal</a>
                <a href="" className="sidenav-trigger" data-target="mobile-menu">
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="#">Contact</Link></li>
                 
                </ul>
                <ul className="sidenav pink lighten-3" id="mobile-menu">
                  <li><Link to="/login" className="white-text">Login</Link></li>
                  <li><Link to="/register" className="white-text">Register</Link></li>
                  <li><Link to="#" className="white-text">Contact</Link></li>
                </ul>
              </div>
            </nav>
        </header>
        )
    }
}
