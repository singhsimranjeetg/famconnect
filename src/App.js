import React from "react";
import "./App.css";

import { useAuthState } from "react-firebase-hooks/auth";


import PasswordPage from "./pages/password/password.page";
import HomePage from "./pages/home-page/home-page"
import MediaPage from "./pages/media/media.page"

import ChatRoom from "./components/chat-room/chat-room.component"

import {auth} from "./firebase/firebase.utils";



//require('dotenv').config();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>{user ? <HomePage/> : <PasswordPage />}</section>
    </div>
  );
}

export default App;


       
       