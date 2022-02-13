<template>
    <div>
        <button class="btn custom-btn btn-outline-primary mr-4" @click="AddToCart">Add to Cart</button>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },
  data(){
      return {
          item :{
            productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
          }
      }
  },
  methods:{
    AddToCart(){
      $('#shoppingCart').modal('show');
      this.$store.commit("addToCart", this.item);
    }
  }
};
</script>
