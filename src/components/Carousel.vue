<template>
  <div class="carousel">
    <slot></slot>

    <button @click="next" class="next">Next</button>
    <button @click="prev" class="prev">Prev</button>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    }
  }
};
</script>

<style>
.carousel {
  position: relative;
  width: 600px;
  height: 350px;
  overflow: hidden;
  margin-top: 50px;
}

.next {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% + 20px);
  background-color: black;
  border: none;
  color: #fff;
  right: 0;
}

.prev {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% + 20px);
  background-color: black;
  border: none;
  color: #fff;
  left: 0;
}

.next:focus,
.next:hover {
  outline: none;
  cursor: pointer;
}

.prev:focus,
.prev:hover {
  outline: none;
  cursor: pointer;
}
</style>
