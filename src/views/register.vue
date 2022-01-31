<template>
  <Navbar />
  <div class="container login">
    <!-- Modal -->
    <div class="row">
      <div class="col">
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Submit</button></p>
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
  const register = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
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
