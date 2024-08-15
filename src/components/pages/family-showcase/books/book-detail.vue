<template>
  <button model="tertiary" a11y-label="Ce bouton est de type discret" @click="back()">
    <svg lib-color="var(--color-primary)" icon="fleche-retour-droite"></svg>
    <span>revenir</span>
  </button>

  <h2 tag="h2">Nothing Page</h2>

  <div padding="sm" radius="xs">
    <text tag="p" center class="b mt-md"> Cette fonctionnalité n'est pas encore disponible. </text>
    <svg center icon="personne-jacuzzi" lib-size="xxxl"></svg>
  </div>

  <div class="carousel-container">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="7000">
          <div class="d-block w-100 custom-carousel-item">
            <h1 class="text-center">1</h1>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7000">
          <div class="d-block w-100 custom-carousel-item">
            <h1 class="text-center">2</h1>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7000">
          <div class="d-block w-100 custom-carousel-item">
            <h1 class="text-center">3</h1>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <BookHeader />
  <div id="app-main-div">
    <BookPdfOrDescriptionArea :pdf="pdf" />
    <BookMainImagesCarousel :images="imageList" />
    <BookRetailLinkList />
    <BookComment />
    <BookSecondaryImagesCarousel :images="imageList" />
  </div>
  <BookFooter />
</template>

<script>
import BookHeader from '@/components/pages/family-showcase/books/widgets/book-header.vue'
import BookPdfOrDescriptionArea from '@/components/pages/family-showcase/books/widgets/book-pdf-or-description-area.vue'
import BookMainImagesCarousel from '@/components/pages/family-showcase/books/widgets/book-main-images-carousel.vue'
import BookRetailLinkList from '@/components/pages/family-showcase/books/widgets/book-retail-link-list.vue'
import BookComment from '@/components/pages/family-showcase/books/widgets/book-comment.vue'
import BookSecondaryImagesCarousel from '@/components/pages/family-showcase/books/widgets/book-secondary-images-carousel.vue'
import BookFooter from '@/components/pages/family-showcase/books/widgets/book-footer.vue'

export default {
  components: {
    BookHeader,
    BookPdfOrDescriptionArea,
    BookMainImagesCarousel,
    BookRetailLinkList,
    BookComment,
    BookSecondaryImagesCarousel,
    BookFooter
  },
  data() {
    return {
      imageList: [
        '/assets/books/book_001/main_images/images/seigneur-des-agneaux-main.jpg',
        '/assets/books/book_001/main_images/images/image2.jpg',
        '/assets/books/book_001/main_images/images/image3.jpg',
        '/assets/books/book_001/main_images/images/image4.jpg',
        '/assets/books/book_001/main_images/images/image5.jpg',
        '/assets/books/book_001/main_images/images/image6.jpg',
        '/assets/books/book_001/main_images/images/image7.jpg'
      ]
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.carousel-container {
  width: 300px; /* La largeur spécifique du carrousel */
  margin: 0 auto; /* Centrer le conteneur */
}

.custom-carousel-item {
  height: 600px; /* La hauteur spécifique de l'item */
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
