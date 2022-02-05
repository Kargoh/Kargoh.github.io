<template>
  <div class="products card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{id, name, price, image } in products" :key="id">
          <td><img :src=image /></td>
          <td>{{name}}</td>
          <td>{{price}}</td>
          <td>
            <router-link :to="`/admin/products/${id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script setup>
import { useLoadProducts, deleteProduct } from '/src/main.js'
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

  tbody {

    td {
      vertical-align: middle;

      img {
        width: 80px;
      }
    }
    
  }

}
</style>
