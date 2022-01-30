<template>
  <Navbar />
  <div class="about container">
    <div class="row">
      <div class="col-12"> 
        <h1>About Page</h1>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-12">
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p> 
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <h2>Our Leader</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
      </div>
      <div class="col-md-6">
        <img class="our-leader" alt="cooldown gaming" src="/src/assets/images/isaiah-cropped.jpg">
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from '/src/components/Navbar.vue'
import Footer from '/src/components/Footer.vue'

export default {
  name: 'about',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

.about {
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
