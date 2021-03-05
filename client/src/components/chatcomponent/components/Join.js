import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Join.css'
class Join extends Component {
    componentDidMount(){
        const M=window.M
        document.addEventListener('DOMContentLoaded',function(){
          var elems=document.querySelectorAll('.sidenav');
          var instances=M.Sidenav.init(elems,{})
        })
    }
    constructor(props){
        super(props)
        this.state={
            name:'',
            room:''
        }
    }
    render() {
        return (
            <div className="joinOuterContainer">
            <header className="">
      <nav className="nav-wrapper transparent">
        <div className="container">
          <a href="" className="brand-logo center"style={{fontSize:"20px"}}>Welcome To Chatroom</a>
          <a href="" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li  style={{marginLeft:"5px"}}><a href="/dashboard">Dashboard</a></li>
            <li><a href="/dashboard/tokens">Tokens</a></li>
          </ul>
          <ul className="sidenav black lighten-3" id="mobile-menu">
          <li>
            <a href="/dashboard" className="white-text" style={{marginTop:"15px"}}>
             
            <span>Dashboard</span>
            </a></li>
            <li><a href="/dashboard/tokens" className="white-text">Tokens</a></li>
          </ul>
        </div>
      </nav>
    </header>
           {/* <h2 className="center-align white-text">Welcome to Chatroom</h2> */}
            <div className="container" style={{marginTop:"200px"}}>
           <div className="row">
               <div className="col s12 l6 joinContainer offset-l2 push-l1">
             
                   <form noValidate style={{marginTop:"10px"}}>
                 
                   <div class="input-field col s12">
                   <input type="text" className="white-text" onChange={(e)=>this.setState({name:e.target.value})}/>
                   <label for="" className="white-text">Name</label>
                    </div>
             
             
                   <div class="input-field col s12">
                   <input type="text" className="white-text" onChange={(e)=>this.setState({room:e.target.value})}/>
                   <label for="" className="white-text">Room</label>
                    </div>
              
               <a onClick={e=>(!this.state.name||!this.state.room)?e.preventDefault():null} href={`/dashboard/chatRoom/chat?name=${this.state.name}&room=${this.state.room}`} className="waves-effect waves-light btn" style={{marginBottom:"20px"}}>Join</a>
                   </form>
            
               </div>
              
           </div>
       </div>
       </div>
        );
    }
}

export default Join;
