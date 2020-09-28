import React, {  useEffect  } from "react";
import "./App.css";




import { useAuthState } from "react-firebase-hooks/auth";


import {SignOut} from "./components/signin-and-signout/sign-in-and-sign-out.component"
import ChatRoom from "./components/chat-room/chat-room.component";
import PasswordPage from "./pages/password/password.page"

import {auth, fcmNoti} from "./firebase/firebase.utils";


require('dotenv').config();


function App() {
  const [user] = useAuthState(auth);


   useEffect(() => { 
    fcmNoti();
    })


  return (
    <div className="App">
      <header>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <PasswordPage />}</section>
    </div>
  );
}

export default App;
