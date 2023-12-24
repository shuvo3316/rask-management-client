// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGq2K64yi7MSHr1n0dYpuzoSmtArJ7PjA",
  authDomain: "task-auth-35f2a.firebaseapp.com",
  projectId: "task-auth-35f2a",
  storageBucket: "task-auth-35f2a.appspot.com",
  messagingSenderId: "536835628963",
  appId: "1:536835628963:web:0f3bc693020a5cef128416"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);