// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbjh48n5Qu2050nLAc9KIlXP0r6nX0D4w",
  authDomain: "palette-of-bengal.firebaseapp.com",
  projectId: "palette-of-bengal",
  storageBucket: "palette-of-bengal.appspot.com",
  messagingSenderId: "753841742535",
  appId: "1:753841742535:web:b33821ac1297391582d4e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;