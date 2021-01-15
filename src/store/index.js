import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    products: [
      {
        name: "Crewneck T-Shirt",
        id: 53362,
        price: 9.5,
        color: "white",
        size: "small",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash",
          additional:
            "Some colors feature different-colored yarns for a heathered effect."
        },
        images: [
          "image-1_45748135705_o",
          "image-1_45938448124_o",
          "image-1_45938452444_o"
        ]
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          "image-2_31721537487_o",
          "image-2_45748126835_o",
          "image-2_46663151911_o"
        ]
      },
      {
        name: "Slim Fit Jeans",
        id: 53364,
        price: 29.5,
        color: "navy",
        size: {
          waist: 32,
          length: 32
        },
        gender: "men",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "denim",
          fit: "slim",
          maintenance: "machine wash cold with like colors, air dry",
          additional: ""
        },
        images: [
          "image-3_31721541697_o",
          "image-3_45938448074_o",
          "image-3_45938448074_o"
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
