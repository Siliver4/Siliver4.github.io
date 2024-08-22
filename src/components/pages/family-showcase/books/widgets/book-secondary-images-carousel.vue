<template>
  <div class="multi-item-secondary-carousel mt-3">
    <div class="secondary-carousel-inner" ref="secondaryCarouselInner">
      <div v-for="(image, index) in images" :key="index" class="secondary-carousel-item">
        <img :src="image" class="custom-secondary-carousel-image" :alt="'Secondary Carousel item ' + index" />
      </div>
    </div>

    <button class="secondary-carousel-control-prev secondary-carousel-control" @click="prevSlide">
      <span class="bi bi-chevron-left" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="secondary-carousel-control-next secondary-carousel-control" @click="nextSlide">
      <span class="bi bi-chevron-right" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [] // Tableau vide par défaut
    }
  },
  data() {
    return {
      currentSlide: 0,
      itemsPerView: 4 // Nombre d'éléments visibles à la fois
    }
  },
  methods: {
    nextSlide() {
      const maxSlide = this.images.length - this.itemsPerView
      if (this.currentSlide < maxSlide) {
        this.currentSlide++
        this.updateTransform()
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
        this.updateTransform()
      }
    },
    updateTransform() {
      const percentage = this.currentSlide * (100 / this.itemsPerView)
      this.$refs.secondaryCarouselInner.style.transform = `translateX(-${percentage}%)`
    },
    updateItemsPerView() {
      const screenWidth = window.innerWidth

      if (screenWidth < 576) {
        this.itemsPerView = 1 // Pour les petits écrans
      } else if (screenWidth < 768) {
        this.itemsPerView = 2
      } else if (screenWidth < 992) {
        this.itemsPerView = 3
      } else {
        this.itemsPerView = 4 // Pour les grands écrans
      }

      this.currentSlide = 0
      this.updateTransform()
    }
  },
  mounted() {
    this.updateItemsPerView()
    window.addEventListener('resize', this.updateItemsPerView)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerView)
  }
}
</script>

<style scoped>
.multi-item-secondary-carousel {
  background-color: #f8f9fa;
  border: 1px solid var(--bs-border-color); /* Utilise la couleur de bordure par défaut de Bootstrap */
  border-radius: 0.25rem;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.secondary-carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.secondary-carousel-item {
  flex: 1 0 calc(100% / 4); /* Ajuste en fonction du nombre d'éléments visibles */
  padding-right: 10px; /* Espace entre les images */
}

/* Media Queries pour ajuster le nombre d'images visibles */
@media (max-width: 575.98px) {
  /* Pour les très petits écrans */
  .secondary-carousel-item {
    flex: 1 0 100%; /* Affiche une seule image */
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  /* Pour les petits écrans */
  .secondary-carousel-item {
    flex: 1 0 calc(100% / 2); /* Affiche deux images */
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  /* Pour les écrans moyens */
  .secondary-carousel-item {
    flex: 1 0 calc(100% / 3); /* Affiche trois images */
  }
}

@media (min-width: 992px) {
  /* Pour les grands écrans */
  .secondary-carousel-item {
    flex: 1 0 calc(100% / 4); /* Affiche quatre images */
  }
}

.custom-secondary-carousel-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.secondary-carousel-control {
  background-color: rgba(211, 211, 211, 0.7);
  border-radius: 50%;
  border: 0px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 30px;
  color: white;
}

.secondary-carousel-control:hover {
  background-color: rgba(169, 169, 169, 0.9); /* Gris un peu plus foncé au survol */
}

.secondary-carousel-control-prev.secondary-carousel-control {
  left: 15px;
}

.secondary-carousel-control-next.secondary-carousel-control {
  right: 15px;
}
</style>
