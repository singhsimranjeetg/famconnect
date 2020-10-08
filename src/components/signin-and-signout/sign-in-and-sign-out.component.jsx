import React, {  useState } from "react";
import "./sign-in-and-sign-out.styles.scss";

import {auth, signInWithGoogle, SignInWithPhone} from "../../firebase/firebase.utils";

export function SignIn() {

    const [formValue, setFormValue] = useState("");


    const signInWithPhoneNumber = (e) => {
      e.preventDefault();
       SignInWithPhone(formValue);
      setFormValue("");
      
      
    };
    

  
    return (
      <>
        <h1>
          Welcome to Famconnect !
        </h1>
        <div id="recaptcha"></div>
        <button className="sign__in--google" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
       
      
        <form onSubmit={signInWithPhoneNumber}>
          <input
            className = "sign__in--phone"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Enter Phone Number With Country Code"
          />
           <button type="submit" disabled={!formValue}
           >
           Sign in with Phone 
          </button>
          </form>

       
         
          
        
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

   
    