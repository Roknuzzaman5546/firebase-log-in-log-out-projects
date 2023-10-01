// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATGfGTEsg2w3RhFv3YCTqP93FubWLIumU",
  authDomain: "fir-login-project-more.firebaseapp.com",
  projectId: "fir-login-project-more",
  storageBucket: "fir-login-project-more.appspot.com",
  messagingSenderId: "560555180480",
  appId: "1:560555180480:web:b65930b17e939c40b98825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;