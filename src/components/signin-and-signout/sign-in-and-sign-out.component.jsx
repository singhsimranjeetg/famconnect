import React, { useEffect } from "react";
import "../../App.css";

import firebase, {auth, writeUserDataInRd} from "../../firebase/firebase.utils";

export function SignIn() {

    const signInWithGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: "select_account"})
      await auth.signInWithPopup(provider);
      //writeUserDataInRd();

    };

    function temp () {
        setTimeout(() => { signInWithGoogle()}, 3000)

    }
    


  
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

