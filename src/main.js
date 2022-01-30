import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import 'bootstrap';
window.$ = window.jQuery = require('jquery');
import '/src/assets/styles/app.scss'
/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyBDLErxAGlMrPu8bw1bpV_0vFgW3Aea51g",
    authDomain: "cooldown-gaming.firebaseapp.com",
    projectId: "cooldown-gaming",
    storageBucket: "cooldown-gaming.appspot.com",
    messagingSenderId: "455702391276",
    appId: "1:455702391276:web:dd12713af30336563c38c9",
    measurementId: "G-DZWHEE032Z"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");