<template>
  <adminNavbar />
  <div class="admin container">
    <div class="row">
      <div class="col-12"> 
        <img class="cd-logo" alt="Vue logo" src="/src/assets/images/logo-cooldown-gaming.svg">
        <h1>Admin Page</h1>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import adminNavbar from '/src/components/admin-nav.vue'
import Footer from '/src/components/Footer.vue'
import firebase from 'firebase'
  import { useRouter } from 'vue-router'
  import { onBeforeUnmount } from 'vue'
  const router = useRouter()
  const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (!user) { // not logged in
          alert('you must be logged in to view this. redirecting to the home page')
          router.push('/')
      }
  })
  onBeforeUnmount(() => {
      // clear up listener
      authListener()
  })
</script>

<style>
.admin .cd-logo {
  height: 256px;
  width: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
