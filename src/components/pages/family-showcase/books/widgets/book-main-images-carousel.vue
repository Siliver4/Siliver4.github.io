<template>
  <p>La première et la quatrième de couverture</p>
  <div class="carousel-container">
    <div id="carouselMainImages" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="['carousel-item', { active: index === 0 }]" data-bs-interval="7000">
          <img :src="image" class="d-block w-100 custom-carousel-item" :alt="'Carousel item ' + index" />
        </div>
      </div>

      <button class="carousel-control-prev custom-carousel-control" type="button" data-bs-target="#carouselMainImages" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"> </span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next custom-carousel-control" type="button" data-bs-target="#carouselMainImages" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"> </span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div v-if="edition" class="edition-box mt-3">Edition {{ edition }}</div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [] // Tableau vide par défaut
    },
    edition: null
  }
}
</script>

<style scoped>
.carousel-container {
  margin: 0 auto; /* Centrer le conteneur */
}

.custom-carousel-item {
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-carousel-control {
  background-color: rgba(211, 211, 211, 0.7); /* Gris clair avec transparence */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; /* Permet de positionner les boutons */
  top: 50%; /* Place le bouton à 50% de la hauteur */
  transform: translateY(-50%); /* Centrage vertical */
  transition: background-color 0.3s ease;
}

.custom-carousel-control:hover {
  background-color: rgba(169, 169, 169, 0.9); /* Gris un peu plus foncé au survol */
}

.custom-carousel-control .carousel-control-prev-icon i,
.custom-carousel-control .carousel-control-next-icon i {
  font-size: 30px;
  color: white;
}

/* Positionner les boutons gauche et droite */
.carousel-control-prev.custom-carousel-control {
  left: 5px;
}

.carousel-control-next.custom-carousel-control {
  right: 5px;
}

.edition-box {
  text-align: center;
  justify-content: center;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
  background-color: #f8f9fa; /* Vous pouvez changer la couleur de fond si nécessaire */
}
</style>
