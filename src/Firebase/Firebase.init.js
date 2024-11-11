// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm2j45J5u9hTFwOvx6pminAJRW-9Z-8cc",
  authDomain: "gadgetpookie.firebaseapp.com",
  projectId: "gadgetpookie",
  storageBucket: "gadgetpookie.firebasestorage.app",
  messagingSenderId: "493758732439",
  appId: "1:493758732439:web:b790d440a55097552b31d2",
  measurementId: "G-FH6QV98X34",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
