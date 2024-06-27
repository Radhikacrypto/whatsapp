import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyATYepbq_aMvLfgY4K7lWVokP775iRoX1s",
    authDomain: "whatsapp-18307.firebaseapp.com",
    projectId: "whatsapp-18307",
    storageBucket: "whatsapp-18307.appspot.com",
    messagingSenderId: "341218255658",
    appId: "1:341218255658:web:62699e7cb15da050a13453",
    measurementId: "G-BW9C4Y1SNJ"
  };

  const app= intializeApp(firebaseConfig)
  const firebaseAuth = getAuth(app)