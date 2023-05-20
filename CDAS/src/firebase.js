// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXI1N1vc7wt0hCs0L5EzcNenwrrfFEQNk",
  authDomain: "city-2118b.firebaseapp.com",
  projectId: "city-2118b",
  storageBucket: "city-2118b.appspot.com",
  messagingSenderId: "971883336344",
  appId: "1:971883336344:web:04e82f1b110bb433b0b6ed",
  measurementId: "G-FQJ463GQTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
//////////////////////////////////////////////////////////////////////////////

export {app,auth,db}