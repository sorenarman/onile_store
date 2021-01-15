<template>
  <div>
    <h1>Products</h1>
    <div class="ProductsWrapper">
      <div v-for="(product, index) in products" :key="index">
        {{ product.name }}
        <carousel :perPage="1">
          <slide v-for="(image, index) in product.image" :key="index">
            <img :src="image" />
          </slide>
        </carousel>
        <div>{{ product.cost }}</div>
        <button v-on:click="AddItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        {
          name: "Jacket",
          cost: "559 SEK",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPoD9T_CW4YMZ34jCTpDc-d8xF2xyblY99Gg&usqp=CAU",
            "https://www.duluthtrading.com/dw/image/v2/BBNM_PRD/on/demandware.static/-/Sites-dtc-master-catalog/default/dwdc50e52d/images/large/34314_BRN.jpg?sw=1350&sh=1000&sm=fit"
          ]
        },

        {
          name: "Dress",
          cost: "349 SEK",
          image: [
            "https://rino.se/4673-thickbox_default/pion-solros-svart.jpg",
            "https://www.thewowcloset.se/wp-content/uploads/2018/02/1_132.jpg"
          ]
        }
      ]
    };
  },
  methods: {
    AddItemToCart(product) {
      this.$emit("AddItemToCart", product);
    }
  },
  components: {}
};
</script>

<style></style>
