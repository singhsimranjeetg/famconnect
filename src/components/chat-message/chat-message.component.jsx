import React from "react";
import "../../App.css";

import {auth, deleteMessageDoc} from "../../firebase/firebase.utils";

import Hammer from "react-hammerjs"



function ChatMessage(props) {
    const { text, uid, photoURL, createdAt } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    

    
    const handleTap = () => {
      console.log("tapped");

      console.log(props.message.id)
      deleteMessageDoc(props.message.id)
 
     // deleteMessageDoc();
 
     /* var message = document.getElementById("chat__message");
      message.style.visibility = "hidden";*/
    }
 
    const handleSwipe = () => {
      console.log("swiped")
      deleteMessageDoc(props.message.id)
    }
  
    return (
      <>      
          <Hammer onDoubleTap={handleTap} onSwipe={handleSwipe}>
          <div className={`message ${messageClass}`} id = "chat__message">
            {
              photoURL ? ( <img
                src={
                  photoURL
                }
                alt="user"
              />  ) : (
                <img src = "https://cdn2.iconfinder.com/data/icons/emoji-and-emoticons/64/Emoji-103-512.png" alt = "user" />
              )
            }
  
          <p>{text} <span className = "msg-date"> {createdAt.toDate().toString().slice(3, 21)} </span></p></div>

          </Hammer>
          
                    
      </>
    );
  }

  export default ChatMessage;