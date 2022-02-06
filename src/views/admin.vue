<template>
  <adminNavbar />
  <div class="admin container">
    <div class="row">
      <div class="col-12"> 
        <img class="cd-logo" alt="Vue logo" src="../assets/images/logo-cooldown-gaming.svg">
      </div>
      <div class="product-list col-12">
        <h2>Products</h2>
        <ProductList />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import adminNavbar from '/src/components/admin-nav.vue'
import Footer from '/src/components/Footer.vue'
import ProductList from '/src/components/admin-products-list.vue'
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

<style lang="scss">
.admin {
  min-height: 90vh;
  padding-top: 5rem !important;
  text-align: center;

  .cd-logo {
    height: auto;
    max-width: 400px;
    width: 100%;
  }

  .product-list {
    text-align: left;
  }
}
</style>
