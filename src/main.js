import { createApp, onUnmounted, ref, data, VueElement } from "vue";

import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import "firebase/storage"
import 'bootstrap';
window.$ = window.jQuery = require('jquery');
import $ from 'jquery'
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
const fb = firebase.initializeApp(firebaseConfig);

// Initialize Database
const db = fb.firestore()

// Product CRUD operations
const productsCollection = db.collection('products')

export const createProduct = product => {
  return productsCollection.add(product)
}

export const getProduct = async id => {
  const product = await productsCollection.doc(id).get()
  return product.exists ? product.data() : null
}

export const updateProduct = (id, product) => {
  return productsCollection.doc(id).update(product)
}

export const deleteProduct = id => {
  return productsCollection.doc(id).delete()
}

export const useLoadProducts = () => {
  const products = ref([])
  const close = productsCollection.onSnapshot(snapshot => {
    products.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return products
}

// Orders CRUD Operations
const ordersCollection = db.collection('orders')

export const createOrder = order => {
  return ordersCollection.add(order)
}

export const getOrder = async id => {
  const order = await ordersCollection.doc(id).get()
  return order.exists ? order.data() : null
}

export const updateOrder = (id, order) => {
  return ordersCollection.doc(id).update(order)
}

export const deleteOrders = id => {
  return ordersCollection.doc(id).delete()
}

export const useLoadOrders = () => {
  const orders = ref([])
  const close = ordersCollection.onSnapshot(snapshot => {
    orders.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return orders
}

// Import Store
import store from './store.js'

// create app
const app = createApp(App);

// use routers
app.use(router);

// use store
app.use(store);

// mount app
app.mount("#app");