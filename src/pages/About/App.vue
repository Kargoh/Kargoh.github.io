<template>
  <Navbar />
  <div class="about container">
    <div class="row">
      <div class="col-12"> 
        <img class="cd-logo" alt="Vue logo" src="../../assets/images/logo-cooldown-gaming.svg">
        <h1>About Page</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

export default {
  name: 'about',
  components: {
    Navbar
  }
}
</script>

<style>
.about .cd-logo {
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
