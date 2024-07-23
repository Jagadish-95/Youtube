// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBznp9a_7gbHWLnab0j2j8Z0R-PvzqyMbE",
  authDomain: "fir-c1740.firebaseapp.com",
  projectId: "fir-c1740",
  storageBucket: "fir-c1740.appspot.com",
  messagingSenderId: "58224124024",
  appId: "1:58224124024:web:a5853d37ca794464018d8d",
  measurementId: "G-G94K9E3KXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);