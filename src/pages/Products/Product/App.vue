<template>
  <Navbar />
  <div class="product container">
    <div class="row">
      <div class="col-12">
        <h1>Product Page</h1>
      </div>
      <div class="col-md-4">
        <img class="our-leader" alt="cooldown gaming" src="/img/gaming-chair.31f9a897.jpg">
      </div>
      <div class="col-md-8">
        <h2>Product</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
        <a class="btn custom-btn btn-outline-primary mr-4" href="#">Add To Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '/src/components/Navbar.vue'

export default {
  name: 'Product',
  components: {
    Navbar
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
