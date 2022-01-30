<template>
  <Navbar />
  <div class="container login">
    <!-- Modal -->
    <div class="row">
      <div class="col">
        <h1>Login to Your Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="signIn">Submit</button></p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import $ from 'jquery'
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import Navbar from '/src/components/Navbar.vue'
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const signIn = () => { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
      .then((data) => {
        console.log('Successfully logged in!');
        router.push('/products') // redirect to the products
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
