<template>
    <div>
  <h1>Products</h1>
      <div class="ProductsWrapper">
        <div class ="card" v-for='product  in products' 
          :key='product'>
          <h2>{{product.name}}</h2>
          <carousel :items-to-show="1" :wrap-around="true">
            <slide v-for="image in product.images" 
              :key="image">
              <img :src="image" alt="picture should be here" >    
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
          <div>{{product.cost}}</div>
          <button v-on:click="AddItemToCart(product)">Add to cart</button>

        </div>
      </div>
      </div>

</template>



<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
    data: () => {
        return {
            products: [
        {
          name: 'Jacket',
          cost: '559 SEK',
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPoD9T_CW4YMZ34jCTpDc-d8xF2xyblY99Gg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWAiMAVp7rROceRF6flIsA5kbO2S0OycFmw&usqp=CAU"
          ]    
        }, 


        {
          name: "Dress",
          cost: "349 SEK",
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBxeX9-L4J512hLmqEnqx3l_yLTbykS4H6w&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNdLyFO79LdOaLY_VMm9fE2GX2Twmyuu0Sw&usqp=CAU"
          ]
    
        },

        {
          name: "Socks",
          cost: "101 SEK",
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuInjFKU0dKkd0W42R6tFp5cBWMhjhd59ZQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7npG_vvqUxlMEwYIbLW8M5kvybj6MEFP1g&usqp=CAU"
          ]
        },
        {
           name: "Jeans",
           cost: "1000 SEK",
           images: [
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2fvxT0kNRqKFP9Dx1y24cS8D13HknuSYPw&usqp=CAU", 
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ2kuKNuAUddM6lO7-JGiPubyO9C5vUDfRQ&usqp=CAU",
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRdLrsj2IFzUta38rNSlro6sB03cl4VWnOQ&usqp=CAU"]
        }
      ],
     

        };

    },
    methods: {
        AddItemToCart(product) {
            this.$emit('AddItemToCart', product)
        },
        
  

  
    },
    components: {
          Carousel,
          Slide,
          Pagination,
          Navigation,
  
    }

}

</script>

<style>
body {
  margin: 0;
  padding: 0%;
}
* {
  box-sizing: content-box;
}

.carousel_slide {
  background-color: black;
  color: white;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  height: 200px;
  width: 50px;
}

.carousel {
  position: relative;
  width: 250px;
  
  

}

img {
  width: 200px;
  height:269px;
}

.carousel__prev,
.carousel__next {
  background-color: black;
	box-sizing: content-box;
}

.carousel__pagination-button {
  background-color: lightgray;
}

.carousel__pagination-button--active {
  background-color: black;
}

button {
  margin-bottom: 4vh;
  background-color: ivory;
  border-radius: 3%;
  font-family: verdana;
}

.ProductsWrapper {

  margin-left: 5vh;
}
</style>

