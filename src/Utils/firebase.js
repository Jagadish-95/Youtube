// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-a09b5.firebaseapp.com",
  projectId: "fir-a09b5",
  storageBucket: "fir-a09b5.appspot.com",
  messagingSenderId: "2266759074",
  appId: "1:2266759074:web:62f5c71d0bd4638191fcfb",
  measurementId: "G-T7MNQJW9DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);