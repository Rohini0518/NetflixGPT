// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCefEMDzeTmJINPmEAoYR_2N3nYVYvzCik",
  authDomain: "netflixrho-8fbed.firebaseapp.com",
  projectId: "netflixrho-8fbed",
  storageBucket: "netflixrho-8fbed.firebasestorage.app",
  messagingSenderId: "29453297806",
  appId: "1:29453297806:web:dfc7890d6f76527d10c1df",
  measurementId: "G-CD4TCWX8CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
