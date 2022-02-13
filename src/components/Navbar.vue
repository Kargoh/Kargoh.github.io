<template>
  <nav class="navbar navbar-expand-lg navbar-light">
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
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
      </ul>
      <div class="right-nav">
        <a href="/login" class="btn btn-outline-success my-2 my-sm-0" >Login</a>
        <a class="btn btn-outline-success my-2 my-sm-0" data-bs-toggle="modal" data-bs-target="#shoppingCart">View Cart</a>
      </div>
    </div>
  </nav>
  <ShoppingCart />
</template>



<script>
import ShoppingCart from './cart.vue'

export default {
  name: 'Navbar',
  components: {
      ShoppingCart
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';
nav {
  background: $white;
  padding: 1rem 3rem;
  position: absolute !important;
  width: 100%;

  #navbarSupportedContent {
    justify-content: space-between;
  }

  a {
    color: $blue
  }

  .right-nav{
    a {
      &:first-of-type {
        margin-right: 6px;
      }
    }
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
