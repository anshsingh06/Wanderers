// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOtdl7ildTwvVDuWS6qRODZtIXnV9gr6o",
  authDomain: "wanderers-c8df9.firebaseapp.com",
  projectId: "wanderers-c8df9",
  storageBucket: "wanderers-c8df9.firebasestorage.app",
  messagingSenderId: "567517905253",
  appId: "1:567517905253:web:eb897da83eb6da1b54618c",
  measurementId: "G-RGPLJPN2R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};