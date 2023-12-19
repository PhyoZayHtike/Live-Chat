import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDTN5UPXTSmz1fX6XTCa7Q8H3PRgU-NQbE",
    authDomain: "live-chat-8be45.firebaseapp.com",
    projectId: "live-chat-8be45",
    storageBucket: "live-chat-8be45.appspot.com",
    messagingSenderId: "663958674479",
    appId: "1:663958674479:web:16b1135ddb57f6133abada"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth}