// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClzHZvN0WjDQ3HPEuF-p5RSn-C-fGWT5w",
  authDomain: "we-cook-87fb0.firebaseapp.com",
  projectId: "we-cook-87fb0",
  storageBucket: "we-cook-87fb0.appspot.com",
  messagingSenderId: "15130946813",
  appId: "1:15130946813:web:8e1bf324ab211e3d466294",
  measurementId: "G-JZRYMJ7QD4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
