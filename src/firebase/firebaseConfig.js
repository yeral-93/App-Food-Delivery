// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0oziqNkS7U-oSPzrYm7ncKS6_ifQ8Q6M",
  authDomain: "food-delivery-app-5f40b.firebaseapp.com",
  projectId: "food-delivery-app-5f40b",
  storageBucket: "food-delivery-app-5f40b.appspot.com",
  messagingSenderId: "346218485294",
  appId: "1:346218485294:web:daeb69c2a05ca58217f1bf",
  measurementId: "G-R9PY3G49LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);