<template>
<div class="footer">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted">About</a></li>
      <li class="nav-item"><a href="/products" class="nav-link px-2 text-muted">Products</a></li>
      <li class="nav-item"><a href="/my-account" class="nav-link px-2 text-muted">My Account</a></li>
      <li class="nav-item"><a href="/login" class="nav-link px-2 text-muted">Login</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 Cooldown Gaming, Inc</p>
  </footer>
</div>
</template>



<script>

export default {
  name: 'Footer',
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

.footer {
  background-color: #272727;
    .py-3 {
      margin-bottom: 0 !important;
      .nav {
      border: none !important;

      li {

        a {
          color: $white !important;
        }
      }
    }
    .text-muted {
      color: $white !important;
    }
    }
  

}

</style>
