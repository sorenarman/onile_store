<template>
  <div>
      <h1>Your Cart</h1>
      <div class="ProductsWrapper">
        <div v-for="(product, index) in cart" :key='index'>
          {{product.name}}
          <img :src="product.images[0]" />
          <div>{{product.cost}}</div>
          <button v-on:click="RemoveItemFromCart(product)">Remove</button>
         </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["cart"],
    methods: {
        RemoveItemFromCart(product) {
            this.$emit('RemoveItemFromCart', product)

        }
    }

    };

</script>

<style>

.ProductsWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

* {
  box-sizing: content-box;
}

</style>