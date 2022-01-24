// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDLErxAGlMrPu8bw1bpV_0vFgW3Aea51g",
  authDomain: "cooldown-gaming.firebaseapp.com",
  projectId: "cooldown-gaming",
  storageBucket: "cooldown-gaming.appspot.com",
  messagingSenderId: "455702391276",
  appId: "1:455702391276:web:dd12713af30336563c38c9",
  measurementId: "G-DZWHEE032Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebaseConfig.initializeApp(analytics);