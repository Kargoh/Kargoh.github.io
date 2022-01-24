<template>
  <div class="products">
    <div class="container">
        <div class="row">
            <div class="col-4"> 
                <a href="/products/product">
                  <h2>Product 1</h2>
                  <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
                </a>
            </div>
            <div class="col-4"> 
                <a href="/products/product">
                  <h2>Product 2</h2>
                  <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
                </a>
            </div>
            <div class="col-4"> 
                <a href="/products/product">
                  <h2>Product 3</h2>
                  <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'products'
}
</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .products {
    a {
      color: #272727;
      text-decoration: none;
    }
  }
}
</style>
