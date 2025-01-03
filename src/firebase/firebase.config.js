// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCExMUSGwJXiR1wt4Jfe2MAFIpkGtI8s6g",
  authDomain: "novelnexus-7260d.firebaseapp.com",
  projectId: "novelnexus-7260d",
  storageBucket: "novelnexus-7260d.firebasestorage.app",
  messagingSenderId: "1006717604266",
  appId: "1:1006717604266:web:38a0a80a2a3cba0af99bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;