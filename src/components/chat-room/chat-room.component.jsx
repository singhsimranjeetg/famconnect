import React, {useRef, useState} from "react";
import "../../App.css";

import ChatMessage from "../chat-message/chat-message.component"

import { useCollectionData } from "react-firebase-hooks/firestore";

import firebase, {auth, firestore} from "../../firebase/firebase.utils";






function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt");
  
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
            placeholder="Type a message"
          />
  
          <button type="submit" disabled={!formValue}>
          <i class="far fa-paper-plane"></i>
          </button>
        </form>
      </>
    );
  }


  export default ChatRoom;