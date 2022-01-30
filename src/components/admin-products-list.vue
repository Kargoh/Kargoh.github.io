<template>
  <div class="products">
    <div class="container">
        <div class="row">
            <div class="col-4 product"> 
                <a href="/products/product">
                  <h2>Product 1</h2>
                  <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
                </a>
                <a class="btn btn-primary">Edit</a>
                <a class="btn btn-primary">Delete</a>
            </div>
            <div class="col-4 product"> 
                <a href="/products/product">
                  <h2>Product 2</h2>
                  <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
                </a>
                <a class="btn btn-primary">Edit</a>
                <a class="btn btn-primary">Delete</a>
            </div>
            <div class="col-4 product"> 
                <a href="/products/product">
                  <h2>Product 3</h2>
                  <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
                </a>
                <a class="btn btn-primary">Edit</a>
                <a class="btn btn-primary">Delete</a>
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
    
    .product {
      display: block;

      a {
        color: #272727;
        text-decoration: none;
      }

      .btn {
        color: $white;
        display: inline-block;
        margin: 24px;
        max-width: 33%;
        width: 33%;
      }
    }
  }
}
</style>
