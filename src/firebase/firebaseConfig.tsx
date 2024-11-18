// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsWtE_UzMeZzayBCZSup4T8a1W1hGy7Ow",
  authDomain: "redux-toolkit-products.firebaseapp.com",
  projectId: "redux-toolkit-products",
  storageBucket: "redux-toolkit-products.firebasestorage.app",
  messagingSenderId: "512173403895",
  appId: "1:512173403895:web:85a556ec981990c776adf2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()