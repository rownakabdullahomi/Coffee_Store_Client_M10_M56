// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBSHQwzfLbOyW5Ak0ohjk-Jw95KIA-EKE",
  authDomain: "coffee-store-cb80d.firebaseapp.com",
  projectId: "coffee-store-cb80d",
  storageBucket: "coffee-store-cb80d.firebasestorage.app",
  messagingSenderId: "84494740509",
  appId: "1:84494740509:web:25ce1d028b055f061eaaf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)