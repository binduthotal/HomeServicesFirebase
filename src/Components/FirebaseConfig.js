// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgibmJPklYViumM8paIxmX24z-qzUqSro",
  authDomain: "fir-app-47705.firebaseapp.com",
  databaseURL: "https://fir-app-47705-default-rtdb.firebaseio.com",
  projectId: "fir-app-47705",
  storageBucket: "fir-app-47705.appspot.com",
  messagingSenderId: "633816788634",
  appId: "1:633816788634:web:753b3bee1de2a8e4583923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)