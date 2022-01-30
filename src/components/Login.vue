<template>
  <div class="login">
    <!-- Modal -->
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab" >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" v-model="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" @click="login">Login</button>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                <h5 class="text-center">Create New Account</h5>
                <p><input type="text" placeholder="Email" v-model="email" /></p>
                <p><input type="password" placeholder="Password" v-model="password" /></p>
                <p><button @click="register">Submit</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery'
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const register = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/products') // redirect to products
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }

  $('#pills-home-tab').click(function() {
    $("#pills-login").toggleClass("show active");
    $("#pills-register").toggleClass("show active");
  });
  $('#pills-register-tab').click(function() {
    $("#pills-login").toggleClass("show active");
    $("#pills-register").toggleClass("show active");
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
