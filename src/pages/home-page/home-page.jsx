import React from "react";
import "../../App.css"
import {Route, Link, Switch , BrowserRouter} from "react-router-dom";


import ChatRoom from "../../components/chat-room/chat-room.component"
import MediaPage from "../../pages/media/media.page";

import Header from "../../components/header/header.component"


const HomePage = () => {
    return (
        
        <div>
            <Header />                  
        </div>


    )
}


export default HomePage;