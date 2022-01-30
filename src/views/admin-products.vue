<template>
  <Navbar />
  <div class="products-page container">
    <div class="row">
      <div class="col-12"> 
        <h1>Products Page</h1>
      </div>
    </div>
  </div>
  <ProductsList />
  <ProductsList />
  <ProductsList />
</template>

<script>
import Navbar from '/src/components/admin-nav.vue'
import ProductsList from '/src/components/admin-products-list.vue'

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductsList
  }
}
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
