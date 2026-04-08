import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLZt93Lf7sqs7l3UWSTvGg-19xoQ_gXVY",
  authDomain: "clothing-7a2df.firebaseapp.com",
  projectId: "clothing-7a2df",
  storageBucket: "clothing-7a2df.firebasestorage.app",
  messagingSenderId: "1020829288773",
  appId: "1:1020829288773:web:ea0f55e70aa9c9123e962c"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);