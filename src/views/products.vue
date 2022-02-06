<template>
  <Navbar />
  <div class="products container">
    <div class="row">
      <div class="col-12"> 
        <h1>Products Page</h1>
      </div>
    </div>
    <ProductsList />
  </div>
  <Footer />
</template>

<script>
import Navbar from '/src/components/Navbar.vue'
import ProductsList from '/src/components/products-list.vue'
import Footer from '/src/components/Footer.vue'

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductsList,
    Footer
  }
}
</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

.products {
  min-height: 80vh;
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
