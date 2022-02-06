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

            <div class="form-group">
                <label for="product_image">Image</label>
                <input type="file" @change="uploadImage" class="form-control">
                <input v-model="form.image" class="form-control" type="hidden" />
            </div>

            <div class="form-group d-flex">
                <div class="p-1">
                    <img :src="form.image" alt="" width="80" >
                </div>
            </div>

            <div class="form-group mt-3">
                <label>Description</label>
                <textarea v-model="form.description" class="form-control" placeholder="Enter description here..."></textarea>
            </div>

            <button :disabled="!form.image" type="submit" class="btn btn-success mt-3">Create Product</button>
        </form>
    </div>
</template>

<script setup>
import { createProduct } from '/src/main.js'
import { reactive } from 'vue'
import firebase from 'firebase'

const firestore = async () => {
    return {
        products: firebase.database.collection('products')
    }
}

const form = reactive({ name: '', price: '', image: '', description: '' })

const onSubmit = async () => {
    await createProduct({ ...form })
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
