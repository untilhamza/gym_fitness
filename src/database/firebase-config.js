// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgLheNQ_ygufdCXffQHvDRtcBLoJwqxwU",
  authDomain: "fit-hero-1339c.firebaseapp.com",
  databaseURL:
    "https://fit-hero-1339c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fit-hero-1339c",
  storageBucket: "fit-hero-1339c.appspot.com",
  messagingSenderId: "313737731506",
  appId: "1:313737731506:web:97fc70dbf000665854d8ab",
  measurementId: "G-JEG1927MYK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//get authetication service from the app and use it else where
export const auth = getAuth(app);
