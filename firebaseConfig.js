import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBkrfShZaVyGfTurQURXDnoJ0vu_jcthzA",
    authDomain: "kejapap-46b0a.firebaseapp.com",
    projectId: "kejapap-46b0a",
    storageBucket: "kejapap-46b0a.appspot.com",
    messagingSenderId: "655924307283",
    appId: "1:655924307283:web:4b7bc9777a4a1855f7eda6",
    measurementId: "G-FZPTWLGK0S"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
