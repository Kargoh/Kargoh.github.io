<template>
  <Navbar />
  <div class="checkout container">
    <h1>Checkout Page</h1>
    <div class="row">
      <div class="col-9"> 
        <h2>Items</h2>
        <ul>
          <li v-for="item in this.$store.state.cart" :key="item.id" class="product" >
              <img :src="item.productImage" width="80" class="align-self-center mr-3" alt="">
              <h5 class="">{{item.productName}}</h5>
              <div class="product-price">
                  <p class="">{{item.productPrice}}</p>
                  <p class="">Quantity : {{item.productQuantity }}</p>
              </div>
              <span class="remove-item" @click="$store.commit('removeFromCart',item)">x</span> 
          </li>
        </ul>
      </div>
      <div class="col-3">
        <h2>Total Price</h2>
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

ul {
  padding-left: 0px;

  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;

      h5 {
        margin: 0;
      }

      .product-price {
        p {
          margin: 0;
        }
      }

      .remove-item {
        background-color: red;
        color: white;
        line-height: 18px;
        font-size: 15px;
        padding: 1px 6px 3px;
        cursor: pointer;
      }
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
