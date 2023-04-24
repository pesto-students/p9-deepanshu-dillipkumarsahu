// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQwlrA3C5lzGPK4P8s0g2LUEwEHCMT76s",
  authDomain: "pesto-8eb77.firebaseapp.com",
  projectId: "pesto-8eb77",
  storageBucket: "pesto-8eb77.appspot.com",
  messagingSenderId: "1073126340813",
  appId: "1:1073126340813:web:a61dbe85354169ce99d184",
  measurementId: "G-SNYEJQRZ4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
