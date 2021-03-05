import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link,BrowserRouter as Router, Route} from 'react-router-dom'
import './dashboard.css'
import Identicon from 'identicon.js'
import {withRouter} from 'react-router-dom'
import Web3 from 'web3'


class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      images:[],
      account:'',
      auth:false
    }
  }
 componentDidMount(){
  const M=window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{});
  });

 
   }
   async componentWillMount()
   {
     await this.loadWeb3()
     await this.loadBlockchinData()
   }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      const connected=window.ethereum.isConnected()
      console.log(connected)
      this.setState({auth:true})
  
   
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      this.setState({auth:true})
      
    
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  async loadBlockchinData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(this.state.account)
  }
 
 
render() {
    const { user } = this.props.auth;
    const {account}=this.state
    const hash="ASHJBDBSDB49999bSJH"
    const newAccount=`${account+hash}`
return (
        
            <div className="dashboardMain">
        <header className="dashboardHeader">  
          <nav className="nav-wrapper black darken-4" >
              <div className="container">
                <a href=""  style={{fontSize:"20px"}} className="left hide-on-med-and-down">My Health Pal</a>
               
                <a href="" className="sidenav-trigger" data-target="mobile-menu" >
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="/dashboard/tokens">Tokens</a></li>
                  <li><a href="/dashboard/chatRoom">Chat Room</a></li>

                  <li><button className="btn waves-effect waves-light" type="submit" name="action" style={{marginLeft:"15px"}} onClick={this.onLogoutClick}>Logout
                  </button></li>
                 <li style={{marginTop:"8px",marginLeft:"20px"}}> {this.state.account && <img className="circle" width='30' height='30' src={`data:image/png;base64,${new Identicon(this.state.account,30).toString()}`} alt="logo"/> }</li>
                  <li style={{marginLeft:"10px"}}>{user.name.split(" ")}</li>
                </ul>
                <ul className="sidenav grey darken-4" id="mobile-menu">
                <li style={{marginTop:"5px",marginLeft:"5px"}}> {this.state.account && <img style={{marginTop:"45px"}} className="circle" width='30' height='30' src={`data:image/png;base64,${new Identicon(this.state.account,30).toString()}`} alt="logo"/> }<span style={{marginLeft:"9px",fontSize:"18px"}}>{user.name.split("")}</span></li>
                  <li><a href="/dashboard/tokens" className="white-text">Tokens</a></li>
                  <li><a href="/dashboard/chatRoom" className="white-text" style={{marginLeft:"10px"}}>Chat Room</a></li>
                  <li><button class="btn waves-effect waves-light" type="submit" name="action" style={{marginLeft:"30px"}} onClick={this.onLogoutClick}>Logout
                  </button></li>
                </ul>
              </div>
            </nav>
        </header>
    
      </div>
       

    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default withRouter(connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard));