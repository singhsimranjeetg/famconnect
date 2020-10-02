import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/messaging";
import "firebase/database";
import "firebase/storage";

//import { useCollectionData } from "react-firebase-hooks/firestore";



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



export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const msg = firebase.messaging();
export const storage = firebase.storage();


//console.log(auth) auth return an object with currentUser in it, which in turn has all other data like displayName, uid in it



// Creates new message doc in firestore

export const createNewMessageDoc = async (formValue) => {
  const messagesRef = firestore.collection("messages");


  const { uid, photoURL } = auth.currentUser;

  await messagesRef.add({
    text: formValue,
    createdAt: new Date(),
    uid,
    photoURL
  });

  
}

export const deleteMessageDoc = async (id) => {
  const messagesRef = firestore.collection("messages").doc(id)


 // const { uid, photoURL } = auth.currentUser;

  await messagesRef.update({
    text: ""
  });

  
}


//ask for push notifications and updates user and token in firbase db.
export const fcmNoti = () => {
  msg.getToken().then(async data => {
  console.log("token", data)

  await firebase.database().ref(`users/${auth.currentUser.uid}`).update({
    displayName: auth.currentUser.displayName,
    notiTokens: data
    
  });
})
 
 };

 /* msg.onMessage((payload) => {
  console.log('onMessage', payload);

}) */


  
// stores user in firebase realtime db after sign in with google

  export const writeUserDataInRd = () =>  {

    console.log("function fired", auth.currentUser)
    if (auth.currentUser != null)  {
      firebase.database().ref('users/' + auth.currentUser.uid).set({
        displayName: auth.currentUser.displayName,
        notiTokens : null
      });
  
      console.log("user write successfully")
      /*const docRef = firebase.database().ref().child('users')
      docRef.on('value', snap => console.log(snap.val()));*/
    }
    }
    



export default firebase;