<template>
    <!-- Modal -->
    <div class="modal fade" id="shoppingCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">My Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <li v-for="item in this.$store.state.cart" :key="item.id" class="product" >
                            <img :src="item.productImage" width="80" class="align-self-center mr-3" alt="">
                            <h5 class="">{{item.productName}}</h5>
                            <div class="product-price">
                                <p class="">{{item.productPrice}}</p>
                                <p class="">Quantity : {{item.productQuantity }}</p>
                            </div>
                            <span class="remove-item" @click="$store.commit('removeFromCart',item)">x</span> 
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
                    <button type="button" class="btn btn-primary" @click="checkout">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: "ShoppingCart",
    props: {
        msg: String
    },
    methods: {
        checkout(){
            $('#shoppingCart').modal('hide')
            this.$router.push('/checkout')  
        }
    }
}
</script>

<style scoped lang="scss">
    ul {
        padding-left: 0px;

        .product {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h5 {
                margin: 0;
            }

            .product-price {
                p {
                    margin: 0;
                }
            }

            .remove-item {
                background-color: red;
                color: white;
                line-height: 18px;
                font-size: 15px;
                padding: 1px 6px 3px;
                cursor: pointer;
            }
        }
    }
</style>
