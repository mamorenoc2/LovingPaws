// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_VZXJmPcvxl4UiWp6kN4KCLZvl_9YU60",
  authDomain: "pets-lovers-c6f89.firebaseapp.com",
  projectId: "pets-lovers-c6f89",
  storageBucket: "pets-lovers-c6f89.appspot.com",
  messagingSenderId: "1036612611161",
  appId: "1:1036612611161:web:282273a141390980111548",
  measurementId: "G-NXWFVZKC3M"
};

// Initialize Firebase y Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);