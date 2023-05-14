import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByNhK0Y6f7SGBCCF-MWH8OJY_0-IT1JrM",
    authDomain: "react-auth-a65ef.firebaseapp.com",
    projectId: "react-auth-a65ef",
    storageBucket: "react-auth-a65ef.appspot.com",
    messagingSenderId: "265628479670",
    appId: "1:265628479670:web:17c0ee1f982295a73b7617",
    measurementId: "G-0WWD7K30NF"
  };

   const firebaseApp = firebase.initalizeApp(firebaseConfig);

   const db = firebaseApp.firestore()

export default db