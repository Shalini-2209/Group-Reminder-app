// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHEWFhQFxUAcM4L_KQw6tgHUBkQGw4Tv4",
  authDomain: "remainder-f089f.firebaseapp.com",
  projectId: "remainder-f089f",
  databaseURL: "https://remainder-f089f-default-rtdb.firebaseio.com/",
  storageBucket: "remainder-f089f.appspot.com",
  messagingSenderId: "203523816648",
  appId: "1:203523816648:web:05efcd753d691eaaf679fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
