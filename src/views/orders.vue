<template>
  <Navbar />
  <div class="orders container">
    <div class="row">
      <div class="col-12"> 
        <h1>Orders Page</h1>
      </div>
    </div>
    <OrdersList />
  </div>
  <Footer />
</template>

<script>
import Navbar from '/src/components/Navbar.vue'
import OrdersList from '/src/components/orders-list.vue'
import Footer from '/src/components/Footer.vue'

export default {
  name: 'Orders',
  components: {
    Navbar,
    OrdersList,
    Footer
  }
}
</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

.orders {
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
