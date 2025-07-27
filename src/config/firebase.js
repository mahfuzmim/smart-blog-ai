// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxb4YGW4PmJ46cC2qs6EzYSfPiyi5FrVA",
  authDomain: "aiblog-84b9c.firebaseapp.com",
  projectId: "aiblog-84b9c",
  storageBucket: "aiblog-84b9c.firebasestorage.app",
  messagingSenderId: "106454499323",
  appId: "1:106454499323:web:7a22ef6fb03d8ab602555e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
