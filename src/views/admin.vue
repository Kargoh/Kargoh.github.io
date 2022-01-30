<template>
  <adminNavbar />
  <div class="admin container">
    <div class="row">
      <div class="col-12"> 
        <img class="cd-logo" alt="Vue logo" src="/src/assets/images/logo-cooldown-gaming.svg">
        <h1>Admin Page</h1>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import adminNavbar from '/src/components/admin-nav.vue'
import Footer from '/src/components/Footer.vue'

export default {
  name: 'admin',
  components: {
    adminNavbar,
    Footer
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
