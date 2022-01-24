<template>
  <Navbar />
  <hero />
  <div class="home container">
    
    <products />
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <img class="cd-logo" alt="cooldown gaming" src="../../assets/images/logo-cooldown-gaming.svg">
      </div>
      <div class="col-md-6">
        <h1>Learn More About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
        <a class="btn custom-btn btn-outline-primary mr-4" href="/about">Learn more</a>
      </div>
    </div>
    <login></login>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import login from '../../components/login.vue'
import products from '../../components/products-list.vue'
import hero from '../../components/hero.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    login,
    products,
    hero
  }
}
</script>

<style>
.home .full-width {
  margin: 0;
}
.home .cd-logo {
  height: 128px;
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
