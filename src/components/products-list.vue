<template>
  <div class="products">
    <div class="row">
      <div v-for="{id, name, price, image, description } in products" :key="id" class="product col-4">
        <a :href="'products/' + id">
          <img class="product-image" :src=image />
          <h3>{{name}}</h3>
          <span class="price">${{price}}</span>
          <p>{{description}}</p>
          <a class="btn custom-btn btn-outline-primary mr-4">View Product</a>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoadProducts } from '/src/main.js'
const products = useLoadProducts()

</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .products {

    .product {
      padding: 2rem 0;

      a {
        width: 100%;
        color: #272727;
        text-decoration: none;
        
        h3 {
          text-transform: uppercase;
        }

        .product-image {
          max-height: 240px;
          width: auto;
        }

        .custom-btn {
          width: auto;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
