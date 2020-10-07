import React from "react"
import "../../App.css"

import MediaPage from "../../pages/media/media.page"
import ChatRoom from "../chat-room/chat-room.component"


//import { Link,  BrowserRouter} from "react-router-dom";

import {SignOut} from "../signin-and-signout/sign-in-and-sign-out.component"

import {Route, Link, Switch , BrowserRouter} from "react-router-dom";



const Header = () => {



    return (
        <div>
        <BrowserRouter>  
        <header>
        <SignOut />     
        <Link to = "/media" >Gallery</Link> 
        <Link to = "/chat">Chat</Link>
        </header>
            <Switch>
            <Route exact path = "/media" component = {MediaPage} />
            <Route path = "/chat" component = {ChatRoom} />  
            </Switch>     
         </BrowserRouter>       
        </div>

    )
}


export default Header;