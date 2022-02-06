<template>
    <h1>{{form.name}}</h1>
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

            <div class="form-group">
                <label for="product_image">Product Images</label>
                <input type="file" @change="uploadImage" class="form-control">
                <input v-model="form.image" class="form-control" />
            </div>

            <div class="form-group d-flex">
                <div class="p-1">
                    <img :src="form.image" alt="" width="80">
                </div>
            </div>

            <div class="form-group mt-3">
                <label>Description</label>
                <textarea v-model="form.description" class="form-control" placeholder="Enter description here..."></textarea>
            </div>

            <button :disabled="!form.image" type="submit" class="btn btn-success mt-3">Update Product</button>
        </form>
    </div>
</template>

<script setup>
import { getProduct, updateProduct } from '/src/main.js'
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import firebase from 'firebase'

const router = useRouter()
const route = useRoute()
const productId = computed(() => route.params.id)
const form = reactive({ name: '', price: '', image: '', description: '' })

onMounted(async () => {
    const product = await getProduct(productId.value)
    form.name = product.name
    form.price = product.price
    form.image = product.image
    form.description = product.description
})

const update = async () => {
    await updateProduct(productId.value, { ...form })
    router.push('/admin/products')
    form.name = ''
    form.price = ''
    form.image = ''
    form.description = ''
}

const uploadImage = async (e) => {
    let file = e.target.files[0]
    let storageRef = firebase.storage().ref('products/' + file.name)
    let uploadTask = storageRef.put(file)

    uploadTask.on('state_changed', (snapshot) => {
        
    }, (error) => {

    }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
           form.image = downloadURL
        })
    })
}

</script>
