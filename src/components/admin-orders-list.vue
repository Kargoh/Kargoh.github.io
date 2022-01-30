<template>
  <div class="orders">
    <div class="container">
        <div class="row">
            <div class="col-12 order"> 
                <p>Order 1 - Description lorem ipsum test</p>
                <a class="btn btn-primary">View Order</a>
            </div>
            <div class="col-12 order"> 
                <p>Order 2 - Description lorem ipsum test</p>
                <a class="btn btn-primary">View Order</a>
            </div>
            <div class="col-12 order"> 
                <p>Order 3 - Description lorem ipsum test</p>
                <a class="btn btn-primary">View Order</a>
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

  .orders {

    
    .order {
      align-items: center;
      display: flex;
      justify-content: space-between;
      position: relative;

      &:after {
        position: absolute;
        content: '';
        width: 80%;
        margin: 0 auto;
        height: 1px;
        background-color: #272727;
        bottom: 0px;
        opacity: .5;
        left: 0;
      }

      p {
        margin: 0;
        margin-block: 0;
        text-align: left;
        width: 90%;
      }

      .btn {
        color: $white;
        display: inline-block;
        margin: 24px;
        width: 10%;
      }
    }
  }
}
</style>
