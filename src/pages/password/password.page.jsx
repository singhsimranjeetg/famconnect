import React, {useState} from "react";
import "../../App.css";

//import ChatRoom from "../../components/chat-room/chat-room.component";

import {SignIn} from "../../components/signin-and-signout/sign-in-and-sign-out.component"





const PasswordPage = () => {

    const key = process.env.REACT_APP_ENTER_KEY;
    

    const [formValue, setFormValue] = useState("");
    
    const [authorized, setAuthorized] = useState(false)

    const checkPassword = async (e) => {
        e.preventDefault(); 

        if (formValue === key) {  
            console.log("welcome")
            setFormValue('')
            setAuthorized(true)
            
        }

        else {
            console.log("Please enter correct password")
            
        }
    }


    return (
        <div>
        <section>{authorized ? <SignIn /> : <h1>Please enter right key or contact Simranjeet for more details.</h1>}</section>
        <form onSubmit = {checkPassword}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Enter your key"
          />
  
          <button type="submit" disabled={!formValue}>
            Submit
          </button>
        </form>
        </div>

        

        


    )
}

export default PasswordPage;