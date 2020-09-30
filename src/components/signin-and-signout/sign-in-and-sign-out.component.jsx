import React from "react";
import "../../App.css";

import firebase, {auth, writeUserDataInRd} from "../../firebase/firebase.utils";

export function SignIn() {
    const signInWithGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      writeUserDataInRd();


    };
  
    return (
      <>
        <h1>
          Welcome to Famconnect !
        </h1>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign in with Google
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

