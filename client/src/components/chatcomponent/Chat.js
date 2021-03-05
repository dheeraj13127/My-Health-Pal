import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Chats from './components/Chats';
import Join from './components/Join';
const Chat = () => {
    return (
        
        <Router>
 
            <Route exact path="/dashboard/chatRoom/join" component={Join}/>
            <Route exact path="/dashboard/chatRoom/chat" component={Chats}/>
            <a href="/dashboard/chatRoom/join">a</a>
        </Router>
    );
}

export default Chat;
