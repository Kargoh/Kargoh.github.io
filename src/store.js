import Vuex from "vuex";

let cart = window.localStorage.getItem('cart');

// Create Store
export default new Vuex.Store({
    state: {
      cart: cart ? JSON.parse(cart) : []
    },
    mutations: {

        addToCart(state, item) {

            let found = state.cart.find(product => product.productId == item.productId )

            if(found){
              found.productQuantity++
            } else {
              state.cart.push(item)
            }

            this.commit('saveData')
        },

        saveData(state) {
          window.localStorage.setItem('cart', JSON.stringify(state.cart))
        },

        removeFromCart(state, item) {
          let index = state.cart.indexOf(item);

          let found = state.cart.find(product => product.productId == item.productId )

          if(found){
            if (found.productQuantity > 1) {
              found.productQuantity--
            }
            else{
              state.cart.splice(index, 1)
            }
          } else {
            state.cart.splice(index, 1)
          }

          this.commit('saveData')
        }
    }
  })