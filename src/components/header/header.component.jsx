import React from "react"


import { Link,  BrowserRouter} from "react-router-dom";

import {SignOut} from "../signin-and-signout/sign-in-and-sign-out.component"





const Header = () => {



    return (
        <div>
        <header>
        <SignOut />
        <BrowserRouter>   
        <Link to = "/media" >Gallery</Link> 
        <Link to = "/chat">Chat</Link>
        </BrowserRouter>     
        </header>       
        </div>

    )
}


export default Header;