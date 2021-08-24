import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC-jZEsuu8-i-wsAgWgmFvPP2Geq-x43JQ",
    authDomain: "virual-commerce.firebaseapp.com",
    projectId: "virual-commerce",
    storageBucket: "virual-commerce.appspot.com",
    messagingSenderId: "323808723211",
    appId: "1:323808723211:web:c2d8007dc787279760a20e"
  };
  

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);