<template>
  <Navbar />
  <hero />
  <div class="home container">
    
    <products />
    <About />
    <mini-cart></mini-cart>
  </div>
  <Footer />
</template>

<script>
import Navbar from '/src/components/Navbar.vue'
import products from '/src/components/products-list.vue'
import hero from '/src/components/hero.vue'
import Footer from '/src/components/Footer.vue'
import About from '/src/components/about-section.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    products,
    hero,
    Footer,
    About
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
