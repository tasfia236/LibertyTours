// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZYoWgGy7iGFPIGtAewZ-x32LjRkx_fSc",
  authDomain: "liberty-tours-70cb2.firebaseapp.com",
  projectId: "liberty-tours-70cb2",
  storageBucket: "liberty-tours-70cb2.appspot.com",
  messagingSenderId: "530940362408",
  appId: "1:530940362408:web:907d3b4ec59b7a7e73cc9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;