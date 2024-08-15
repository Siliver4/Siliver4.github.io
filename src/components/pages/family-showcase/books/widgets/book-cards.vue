<template>
  <div class="mt-4">
    <div class="row g-3">
      <!-- Boucle sur chaque groupe de livres -->
      <template v-for="group in groupedBooks" :key="group[0].saga">
        <!-- Boucle sur chaque livre dans le groupe -->
        <div v-for="book in group" :key="book.id" class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-4">
          <div class="card h-100 clickable-card" @click="goToBookDetail(book.id)">
            <img :src="bookUtils.getFirstMainImage(book)" class="card-img-top img-bordered" alt="Book Cover" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.author }}</p>
              <div class="mt-auto">
                <p class="card-text">
                  <small class="text-muted">Saga : {{ book.saga }}</small>
                </p>
                <!-- Conteneur de badges avec limitation à deux lignes -->
                <div class="genres-container">
                  <span v-for="genre in book.genres" :key="genre" class="badge rounded-pill bg-secondary me-2 mb-2">{{ genre }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import BookUtils from '@/utils/bookUtils'

export default {
  props: {
    groupedBooks: []
  },
  data() {
    return {
      bookUtils: new BookUtils()
    }
  },
  methods: {
    goToBookDetail(id) {
      this.$router.push({ name: 'bookDetail', params: { id } })
    }
  }
}
</script>

<style scoped>
.card {
  border-bottom: 4px solid var(--bs-border-color); /* Utilise la couleur de bordure par défaut de Bootstrap */
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Pour s'assurer que les éléments sont uniformément distribués */
}
.img-bordered {
  border-bottom: 2px solid var(--bs-border-color); /* Utilise la couleur de bordure par défaut de Bootstrap */
}
.card-text {
  margin-bottom: 0.5rem;
}
.mt-auto {
  margin-top: auto; /* Pousse le badge en bas */
  align-items: center; /* Centre horizontalement les éléments */
  justify-content: center; /* Centre verticalement les éléments */
  text-align: center; /* Centre le texte à l'intérieur des éléments */
}

/* Conteneur de genres limité à deux lignes */
.genres-container {
  max-height: 4rem;
  overflow: hidden;
}

/* Indiquer que la carte est cliquable en changeant le curseur */
.clickable-card {
  cursor: pointer;
}

/* Cible uniquement les écrans de grande taille (Bootstrap col-xxl-2) */
@media (min-width: 1400px) {
  .clickable-card {
    transition:
      border 0.2s ease,
      transform 0.2s ease;
  }

  /* Ajouter un effet de survol pour augmenter l'épaisseur de la bordure */
  .clickable-card:hover {
    border: 3px solid var(--bs-border-color);
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

/* Cible uniquement tous les écrans plus petits que les écrans de grande taille (Bootstrap col-xxl-2) */
@media (max-width: 1400px) {
  .clickable-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
