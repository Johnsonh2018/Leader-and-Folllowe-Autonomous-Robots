// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQguV1HFmlK5Ayx3MYRFGKZHzjJBjM004",
  authDomain: "auth-ld.firebaseapp.com",
  projectId: "auth-ld",
  storageBucket: "auth-ld.appspot.com",
  messagingSenderId: "222622059547",
  appId: "1:222622059547:web:e461965a475bdc0b933cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app