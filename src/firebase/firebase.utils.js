import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/messaging"



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


export const fcmNoti = () => {
  msg.getToken().then(data => {
  console.log("token", data)
})
  msg.onMessage((payload) => {
  console.log('onMessage', payload)

})
 };



export default firebase;