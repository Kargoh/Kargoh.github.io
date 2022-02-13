<template>
  
  <Navbar />
  <div class="checkout container">
    <h1>Checkout Page</h1>
    <div class="row">
      <div class="col-9"> 
        <h2>Items</h2>
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
      <div class="col-3">
        <h2>Card Information</h2>

        <form id="payment-form">
          <div id="payment-element">
            <!-- Elements will create form elements here -->
            <label>Name on Card</label><input class="form-control mr-sm-2" type="text" placeholder="Name on Card" aria-label="name">
            <label>Card Number</label><input class="form-control mr-sm-2" type="text" placeholder="Name on Card" aria-label="name">

          </div>
          <button type="submit" class="btn btn-outline-success my-2 my-sm-0" id="submit">Submit</button>
          <div id="error-message">
            <!-- Display error message to your customers here -->
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
// import Stripe from "https://js.stripe.com/v3/"
import Navbar from '/src/components/Navbar.vue'
import Footer from '/src/components/Footer.vue'
// const axios = require('axios')
// // Set your secret key. Remember to switch to your live secret key in production.
// // See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = Stripe('pk_test_51KSXKQFCPDEQnRi15eXSbGVe7SAQC2AM5c5GLHE8BjYDsiMUeAC4pL52iC3NQBhtclfHhPMAIskGZwnw5YcwfZIx00n6xde40v');

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
//   automatic_payment_methods: {enabled: true},
// });

// const options = {
//   clientSecret: 'sk_test_51KSXKQFCPDEQnRi1mEWq8Ph3UhFJiuvMD9Xn3zc7b9Iw0lrBQjAGjnGTAtsAVFyPjv431vexZhJlBOU5D9RaOdeg00Wz6nMdCh',
//   // Fully customizable with appearance API.
//   appearance: {/*...*/},
// };

// // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 2
// const elements = stripe.elements(options);

// // Create and mount the Payment Element
// const paymentElement = elements.create('payment');
// paymentElement.mount('#payment-element');

// const form = document.getElementById('payment-form');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const {error} = await stripe.confirmPayment({
//     //`Elements` instance that was used to create the Payment Element
//     elements,
//     confirmParams: {
//       return_url: 'https://my-site.com/order/123/complete',
//     },
//   });

//   if (error) {
//     // This point will only be reached if there is an immediate error when
//     // confirming the payment. Show error to your customer (for example, payment
//     // details incomplete)
//     const messageContainer = document.querySelector('#error-message');
//     messageContainer.textContent = error.message;
//   } else {
//     // Your customer will be redirected to your `return_url`. For some payment
//     // methods like iDEAL, your customer will be redirected to an intermediate
//     // site first to authorize the payment, then redirected to the `return_url`.
//   }
// });

export default {
  name: 'about',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
