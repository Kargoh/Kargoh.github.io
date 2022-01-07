<template>
  <adminNavbar />
  <div class="products">
    <div class="container">
        <div class="row">
            <div class="col-4"> 
                <h2>Product 1</h2>
                <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
            </div>
            <div class="col-4"> 
                <h2>Product 2</h2>
                <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
            </div>
            <div class="col-4"> 
                <h2>Product 3</h2>
                <img class="cd-logo" alt="Vue logo" src="../assets/images/gaming-chair.jpg">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
