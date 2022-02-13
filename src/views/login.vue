<template>
  <Navbar />
  <div class="container login">
    <div class="row">
      <div class="col login-card">
        <h1>Login to Your Account</h1>
        <div class="form-group">
          <p><input class="form-control" type="text" placeholder="Email" v-model="email" /></p>
          <p><input class="form-control" type="password" placeholder="Password" v-model="password" /></p>
          <button class="btn custom-btn btn-outline-primary mr-4" @click="signIn">Log In</button>
          
          <div class="register-link">
            <p>Don't have an account?</p>
            <a href="/register">Register Here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
// import $ from 'jquery'
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import Navbar from '/src/components/Navbar.vue'
import Footer from '/src/components/Footer.vue'
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const signIn = () => { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
      .then((data) => {
        router.push('/admin') // redirect to the admin
      })
      .catch(error => {
        alert(error.message);
      });
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login {
    min-height: 90vh;

    .login-card {
      border-radius: 6px;
      border: 2px solid #e3e3e3;
      margin: 0 auto;
      max-width: 33%;
      padding: 1rem;
      text-align: center;
      width: 100%;

      .form-group {
        padding: 2rem;

        .register-link {
          display: block;
          padding: 3rem 0 0;

          a {
            display: block;
          }
        }
      }
    }
  }
</style>
