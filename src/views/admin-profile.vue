<template>
  <Navbar />
  <div class="products-page container">
    <div class="row">
      <div class="col-12"> 
        <h1>{{profileInfo.email}}'s Profile</h1>
      </div>
    </div>
  </div>
  
  
</template>

<script setup>
import Navbar from '/src/components/admin-nav.vue'
import ProductsList from '/src/components/admin-products-list.vue'
import ProductCreate from '/src/components/product-create.vue'

import { reactive} from 'vue'
import firebase from 'firebase'

const profileInfo = reactive({ name: '', email: '', photoUrl: '', emailVerified: '', uid: '' })

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    profileInfo.name = user.displayName
    profileInfo.email = user.email
    profileInfo.image = user.photoURL
    profileInfo.emailVerified = user.emailVerified
    profileInfo.uid = user.uid
    // ...
  } else {
    // User is signed out
    // ...
  }
});



</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

.products {

  .cd-logo {
    height: 256px;
    width: auto;
  }

  .our-leader {
    max-width: 400px;
  }
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
