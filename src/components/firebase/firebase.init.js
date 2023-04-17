// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxEInP1JI9ns05Y2LGw8945eMcoQMZvg8",
  authDomain: "simple-fiarbase.firebaseapp.com",
  projectId: "simple-fiarbase",
  storageBucket: "simple-fiarbase.appspot.com",
  messagingSenderId: "905579627422",
  appId: "1:905579627422:web:2fa6679a2cfa57c8154c8f",
  measurementId: "G-46BENH7567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app