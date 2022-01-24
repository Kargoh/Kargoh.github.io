import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
window.$ = window.jQuery = require('jquery');
import '../../assets/styles/app.scss'

createApp(App).mount('#app')