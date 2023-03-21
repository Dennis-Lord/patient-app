// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSYlKFC87g3IHu8OI1wuiGaHJVdYSopwM",
  authDomain: "patient-app-api-de1a9.firebaseapp.com",
  projectId: "patient-app-api-de1a9",
  storageBucket: "patient-app-api-de1a9.appspot.com",
  messagingSenderId: "993057092467",
  appId: "1:993057092467:web:06f899008d9d27e88a4b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);