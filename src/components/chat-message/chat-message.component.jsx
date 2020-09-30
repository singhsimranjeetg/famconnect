import React from "react";
import "../../App.css";

import {auth} from "../../firebase/firebase.utils";

function ChatMessage(props) {
    const { text, uid, photoURL, createdAt } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    
   /* if (createdAt) {
      var msgDate = createdAt.toDate().toString().slice(3, 21);
    }
    
    //const convertedDate = moment(msgDate).format('DD-MM-YYYY');

    console.log(msgDate)*/
  
    return (
      <>
        <div className={`message ${messageClass}`}>
          <img
            src={
              photoURL
            }
            alt="chat"
          />
          
          <p>{text} <span className = {`msg-date`}> {createdAt.toDate().toString().slice(3, 21)} </span></p>
          
    
          
          
        </div>
      </>
    );
  }

  export default ChatMessage;