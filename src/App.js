import React, { useRef, useState,  useEffect  } from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/messaging"

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDg0yZZ2DRQbadBXFghqzjbs8jtPTu4sUc",
    authDomain: "famconnect-9b7cb.firebaseapp.com",
    databaseURL: "https://famconnect-9b7cb.firebaseio.com",
    projectId: "famconnect-9b7cb",
    storageBucket: "famconnect-9b7cb.appspot.com",
    messagingSenderId: "252889654795",
    appId: "1:252889654795:web:9002b0708a19964167c90e",
    measurementId: "G-MW93NFB88C"
  });
}

const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();



function App() {
  const [user] = useAuthState(auth);

 /* useEffect(() => {
    
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then(data => {
      console.log(data)
    })
  })
*/
   useEffect(() => {
    
    const msg = firebase.messaging();
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

function SignIn() {
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
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          send
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL
          }
          alt="chat"
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
