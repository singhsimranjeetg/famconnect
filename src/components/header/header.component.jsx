import React from "react"
import "./header.styles.scss"

import MediaPage from "../../pages/media/media.page"
import ChatRoom from "../chat-room/chat-room.component"


//import { Link,  BrowserRouter} from "react-router-dom";

import {SignOut} from "../signin-and-signout/sign-in-and-sign-out.component"

import {Route, Link, Switch , BrowserRouter} from "react-router-dom";



const Header = () => {



    return (
        <div>
        <BrowserRouter>  

            <Switch>
            <Route exact path = "/" component = {ChatRoom} /> 
            <Route path = "/media" component = {MediaPage} />
            <Route path = "/chat" component = {ChatRoom} />  
            </Switch>    
        <header className = "header">
        <Link to = "/chat">Chat</Link>    
        <Link to = "/media" >Gallery</Link> 
        <SignOut />     
        </header> 
         </BrowserRouter>
    
        </div>

    )
}


export default Header;