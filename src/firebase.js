import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyAaJmgOECQUGW60TXUjTaV1DIpw7fQg_5A",
    authDomain: "twitter-clone-74792.firebaseapp.com",
    projectId: "twitter-clone-74792",
    storageBucket: "twitter-clone-74792.appspot.com",
    messagingSenderId: "120128240825",
    appId: "1:120128240825:web:73bc2f0e91c77d11ea2f68",
    measurementId: "G-JFYRCKHTY6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;