<template>
  <Navbar />
  <div class="product container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <img class="product-image" :alt="productInfo.name" :src="productInfo.image">
      </div>
      <div class="col-md-6">
        <h1>{{productInfo.name}}</h1>
        <p class="price">{{productInfo.price}}</p>
        <p class="description">{{productInfo.description}}</p>
        <a class="btn custom-btn btn-outline-primary mr-4" href="#">Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProduct } from '/src/main.js'
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '/src/components/Navbar.vue'


const router = useRouter()
const route = useRoute()
const productId = computed(() => route.params.id)
const productInfo = reactive({ name: '', price: '', image: '', description: '' })

onMounted(async () => {
    const product = await getProduct(productId.value)
    productInfo.name = product.name
    productInfo.price = product.price
    productInfo.image = product.image
    productInfo.description = product.description
})

</script>
