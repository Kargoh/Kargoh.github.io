<template>
  <Navbar />
  <div class="container register">
    <div class="row">
      <div class="col register-card">
        <h1>Create an Account</h1>
        <div class="form-group">
          <p><input class="form-control" type="text" placeholder="Email" v-model="email" /></p>
          <p><input class="form-control" type="password" placeholder="Password" v-model="password" /></p>
          <button class="btn custom-btn btn-outline-primary mr-4" @click="register">Submit</button>
          
          <div class="login-link">
            <p>Already have an account?</p>
            <a href="/login">Login Here</a>
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
  const register = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        alert(error.message);
      });
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .register {
    min-height: 90vh;
    
    .register-card {
      border-radius: 6px;
      border: 2px solid #e3e3e3;
      margin: 0 auto;
      max-width: 33%;
      padding: 1rem;
      text-align: center;
      width: 100%;

      .form-group {
        padding: 2rem;

        .login-link {
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
