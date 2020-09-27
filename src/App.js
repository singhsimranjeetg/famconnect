import React, {  useEffect  } from "react";
import "./App.css";


import { useAuthState } from "react-firebase-hooks/auth";


import {SignIn, SignOut} from "./components/signin-and-signout/sign-in-and-sign-out.component"
import ChatRoom from "./components/chat-room/chat-room.component";

import {auth, msg} from "./firebase/firebase.utils";





function App() {
  const [user] = useAuthState(auth);


   useEffect(() => {
    
    msg.getToken().then(data => {
      console.log("token", data)
    })
  })

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
