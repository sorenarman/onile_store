<template>
  <div>
    <header>
      <button v-on:click="navigateTo('Products')">View Products</button>
      {{ cart.length }}
      <button v-on:click="navigateTo('Cart')">View Cart</button>
    </header>

    <div v-if="page === 'Cart'">
      <Cart v-on:RemoveItemFromCart="RemoveItemFromCart" :cart="cart" />
    </div>

    <div v-if="page === 'Products'">
      <Products v-on:AddItemToCart="AddItemToCart" />
    </div>
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  data: () => {
    return {
      page: "Products",
      cart: []
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
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
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },

    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    }
  },
  components: {
    Products,
    Cart
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
  height: 50px;
  background-color: lightblue;
  text-align: right;
  box-shadow: 2px 2px 5px #999;
  font-size: 20px;
  padding-top: 20px;
}
</style>
