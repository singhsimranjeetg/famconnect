import React from "react";
import "../../App.css";

import firebase, {auth} from "../../firebase/firebase.utils";

export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <p>
          Welcome to FamConnect !!!!
        </p>
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
    );
  }

