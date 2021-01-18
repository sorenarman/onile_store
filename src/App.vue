<template>
  <div>
    <header>
      <h1 class ="siteName">Paraknas</h1>
      <button v-on:click="navigateTo('Products')">View Products</button>
      {{cart.length}}
      <button v-on:click="navigateTo('Cart')">View Cart</button>
    </header>

    <div v-if="page === 'Cart'">
      <Cart v-on:RemoveItemFromCart="RemoveItemFromCart" :cart="cart"/>
    </div>

    <div v-if="page === 'Products'">
      <Products v-on:AddItemToCart="AddItemToCart"/>

    </div>
  </div>
</template>

<script>
import Products from "./components/Products.vue"
import Cart from "./components/Cart.vue"


export default {
  name: 'App',
  data: () => {
    return {
      page: 'Products',
      cart: [],

    }
  },

  methods: {
    AddItemToCart(product) {
      this.cart.push(product);
    },
    RemoveItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    navigateTo(page) {
      this.page = page;
    },
    

  },
  components: {
    Products,
    Cart,


  }
};
</script>

<style>
body {
  margin: 0;
}

.ProductsWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

button {
  cursor: pointer;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0%;
  padding: 0%;
}

header {
  position: relative;
  height: 120px;
  background-color: lightblue;
  box-shadow: 2px 2px 5px #999;
  text-align:right;
  font-size: 20px;
  padding-top: 20px;
  bottom: 60px;
}



.siteName {
  position: relative;
  right:542px;
  margin-bottom: 0;
  top: 30px;
}






</style>
