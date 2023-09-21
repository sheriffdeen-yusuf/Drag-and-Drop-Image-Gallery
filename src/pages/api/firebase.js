// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsrjvFwtj23EVmA7g-GadY7NwfXXlxATQ",
  authDomain: "draggable-hng.firebaseapp.com",
  projectId: "draggable-hng",
  storageBucket: "draggable-hng.appspot.com",
  messagingSenderId: "1015028086999",
  appId: "1:1015028086999:web:cca34ea710dcc9f9395892",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
