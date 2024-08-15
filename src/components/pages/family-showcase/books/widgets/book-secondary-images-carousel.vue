<template>
  <div class="image-slider-container my-4">
    <div class="d-flex justify-content-between align-items-center">
      <button class="btn btn-primary" @click="slideLeft">a</button>
      <div class="overflow-hidden w-100">
        <div class="d-flex" ref="imageSlider">
          <img v-for="(image, index) in images" :key="index" :src="image" class="img-fluid" alt="Slider Image" />
        </div>
      </div>
      <button class="btn btn-primary" @click="slideRight">b</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    slideLeft() {
      const slider = this.$refs.imageSlider
      slider.scrollLeft -= slider.clientWidth / 6
    },
    slideRight() {
      const slider = this.$refs.imageSlider
      slider.scrollLeft += slider.clientWidth / 6
    }
  }
}
</script>

<style scoped>
.image-slider-container {
  max-width: 100%;
}

.image-slider-container img {
  width: 16.66%; /* 100% / 6 images */
  transition: transform 0.3s ease;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
