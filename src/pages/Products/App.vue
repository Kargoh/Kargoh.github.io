<template>
  <Navbar />
  <div class="products container">
    <div class="row">
      <div class="col-12"> 
        <img class="cd-logo" alt="Vue logo" src="../../assets/images/logo-cooldown-gaming.svg">
        <h1>Products Page</h1>
      </div>
    </div>
  </div>
  <ProductsList />
  <ProductsList />
  <ProductsList />
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import ProductsList from '../../components/products-list.vue'

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductsList
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';
@import '../../assets/styles/fonts.scss';

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
