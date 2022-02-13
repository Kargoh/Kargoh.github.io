<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/"><img src="../assets/images/logo-cooldown-gaming.svg" height="32px" width="auto"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/orders">Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/profile">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logOut">Logout</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
</template>



<script setup>
import firebase from 'firebase'
import { useRouter } from 'vue-router'

const router = useRouter() // get a reference to our vue router
const logOut =() => {
      firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/') // redirect to home
      })
      .catch((err) => {
      })
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';
nav {
  background: rgba(44,62,80,.5) !important;
  padding: 1rem 3rem;
  position: absolute !important;
  width: 100%;

  #navbarSupportedContent {
    justify-content: space-between;
  }

  form {
    display: flex;
    column-gap: 1rem;
 
    button {
      background-color: $white !important;
    }
  }
}
</style>
