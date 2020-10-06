import React, {useRef, useState, useEffect} from "react";
import "../../App.css";

import ChatMessage from "../chat-message/chat-message.component"

import { useCollectionData } from "react-firebase-hooks/firestore";

import  { createNewMessageDoc, firestore, fcmNoti} from "../../firebase/firebase.utils";






function ChatRoom() {

  useEffect( () => {
    let messageBody = document.querySelector('#messageBody');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

   // fcmNoti();
  })



    const dummy = useRef();
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt");   
    const [messages] = useCollectionData(query, { idField: "id" });  
  
    const [formValue, setFormValue] = useState("");

  
  
    const sendMessage = async (e) => {
      e.preventDefault();
      await createNewMessageDoc(formValue);

  
      setFormValue("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
      
    };

    

    
   
  
  
    return (
      <>
        <main id = 'messageBody'>
          {messages &&
            messages.map((msg) => (
               <ChatMessage key={msg.id} message={msg} />)
             )}
  
          <span ref={dummy}></span>
        </main>
  
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Type a message"
          />
  
          <button type="submit" disabled={!formValue}>
          <i className="far fa-paper-plane"></i>
          </button>
        </form>
      </>
    );
  }


  export default ChatRoom;