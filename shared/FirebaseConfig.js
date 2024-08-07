// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2RRB6wbpFk-z5X09pXME7LhF2XUdeqnc",
  authDomain: "sports-ninja-app.firebaseapp.com",
  projectId: "sports-ninja-app",
  storageBucket: "sports-ninja-app.appspot.com",
  messagingSenderId: "149061172323",
  appId: "1:149061172323:web:7d9c819b133dde984a8c56",
  measurementId: "G-BWH5VVC639",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
