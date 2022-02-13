<template>
  <Navbar />
  <div class="order container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <img class="order-image" :alt="orderInfo.name" :src="orderInfo.image">
      </div>
      <div class="col-md-6">
        <h1>{{orderInfo.name}}</h1>
        <p class="price">{{orderInfo.price}}</p>
        <p class="description">{{orderInfo.description}}</p>
        <a class="btn custom-btn btn-outline-primary mr-4" href="#">View Order</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getOrder } from '/src/main.js'
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '/src/components/Navbar.vue'


const router = useRouter()
const route = useRoute()
const orderId = computed(() => route.params.id)
const orderInfo = reactive({ name: '', price: '', image: '', description: '' })

onMounted(async () => {
    const order = await getOrder(orderId.value)
    orderInfo.name = order.name
    orderInfo.price = order.price
    orderInfo.image = order.image
    orderInfo.description = order.description
})

</script>
