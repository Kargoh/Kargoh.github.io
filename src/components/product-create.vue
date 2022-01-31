<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="form.name" class="form-control" required />
            </div>

            <div class="form-group mt-3">
                <label>Price</label>
                <input v-model="form.price" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">Create Product</button>
        </form>
    </div>
</template>

<script setup>
import { createProduct } from '/src/main.js'
import { reactive } from 'vue'

const form = reactive({ name: '', price: '' })
const onSubmit = async () => {
    await createProduct({ ...form })
    form.name = ''
    form.price = ''
}

</script>
