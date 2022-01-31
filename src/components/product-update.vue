<template>
    <div class="card card-body mt-4">
        <h2>Edit Product</h2>
        <form @submit.prevent="update">
            <div class="form-group">
                <label>Name</label>
                <input v-model="form.name" class="form-control" required />
            </div>

            <div class="form-group mt-3">
                <label>Price</label>
                <input v-model="form.price" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">Update Product</button>
        </form>
    </div>
</template>

<script setup>
import { getProduct, updateProduct } from '/src/main.js'
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const productId = computed(() => route.params.id)
const form = reactive({ name: '', price: '' })

onMounted(async () => {
    const product = await getProduct(productId.value)
    form.name = product.name
    form.price = product.price
})

const update = async () => {
    await updateProduct(productId.value, { ...form })
    router.push('/admin/products')
    form.name = ''
    form.price = ''
}

</script>
