<template>
  <adminNavbar />
  <div class="products container">
    <div class="row">
      <div class="col-12"> 
        <img class="cd-logo" alt="Vue logo" src="../../../assets/images/logo-cooldown-gaming.svg">
        <h1>Products Page</h1>
      </div>
    </div>
  </div>
</template>

<script>
import adminNavbar from '../../../components/admin-nav.vue'

export default {
  name: 'products',
  components: {
    adminNavbar
  }
}
</script>

<style>
.admin .cd-logo {
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
