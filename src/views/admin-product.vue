<template>
  <Navbar />
  <div class="product-page container">
    <div class="row">
      <div class="col-12"> 
        <h1>Product</h1>
        <UpdateProduct />
      </div>
    </div>
  </div>
  
  
</template>

<script setup>
import Navbar from '/src/components/admin-nav.vue'
import UpdateProduct from '/src/components/product-update.vue'


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
