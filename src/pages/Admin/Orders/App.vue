<template>
  <adminNavbar />
  <div class="order-page container">
    <div class="row">
      <div class="col-12"> 
        <h1>Order Page</h1>
      </div>
    </div>
  </div>
  <orderList />
</template>

<script>
import adminNavbar from '../../../components/admin-nav.vue'
import orderList from '/src/components/admin-orders-list.vue'

export default {
  name: 'orders',
  components: {
    adminNavbar,
    orderList
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
