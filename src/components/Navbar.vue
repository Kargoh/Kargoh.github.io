<template>

    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/"><img src="../assets/images/logo-cooldown-gaming.svg" height="32px" width="auto"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products">Products</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <a class="btn btn-outline-success my-2 my-sm-0" data-bs-toggle="modal" data-bs-target="#login">Login</a>
        </form>
      </div>
    </nav>

    
</template>



<script>

export default {
  name: 'Navbar',
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
      background-color: #fff !important;
    }
  }
}



</style>
