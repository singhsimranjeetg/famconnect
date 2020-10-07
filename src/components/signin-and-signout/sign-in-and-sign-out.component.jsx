import React, {  useState } from "react";
import "../../App.css";

import firebase, {auth, signInWithGoogle, testAuth} from "../../firebase/firebase.utils";

export function SignIn() {

    const [formValue, setFormValue] = useState("");

    

  
    return (
      <>
        <h1>
          Welcome to Famconnect !
        </h1>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
       
      
            <button type="submit" /*disabled={!formValue}*/
          onClick = {testAuth}
           className = "sign-in-button"
           id="recaptcha-container"
           >
           Send Code
          </button>

       
         
          
        
      </>
    );
  }
  
 export function SignOut() {



    return (
      
        auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
          
        )
    )
  }

/*   <form onSubmit={testAuth}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Enter Phone Number"
          />
    */