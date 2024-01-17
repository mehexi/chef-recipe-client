// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYvI32A-rMeLn1DNfKUTyxoi5dsH_7V2E",
  authDomain: "chef-recipe-eda14.firebaseapp.com",
  projectId: "chef-recipe-eda14",
  storageBucket: "chef-recipe-eda14.appspot.com",
  messagingSenderId: "601104861408",
  appId: "1:601104861408:web:2dba658d1df8308c812885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app