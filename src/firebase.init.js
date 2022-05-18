// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApUp94y_hvubg7EQB4TXHjaW0ccnKVkAM",
    authDomain: "todo-app-63fad.firebaseapp.com",
    projectId: "todo-app-63fad",
    storageBucket: "todo-app-63fad.appspot.com",
    messagingSenderId: "216022641568",
    appId: "1:216022641568:web:84e13cfd095cb1b81292c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;