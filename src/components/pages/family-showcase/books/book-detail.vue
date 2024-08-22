<template>
  <div v-if="!loading">
    <BookHeader />
    <div id="app-main-div">
      <BookDetailHeader :title="book.title" :author="book.author" />
      <span v-for="genre in book.genres" :key="genre" class="badge rounded-pill bg-secondary m-2 fs-6">{{ genre }}</span>

      <div class="mt-1">
        <div class="row g-3">
          <div class="col-12 col-lg-7">
            <div class="content-70 p-2 text-center">
              <BookPdfOrDescriptionArea :pdf="bookUtils.getPDF(book)" :description="book.description" />
            </div>
          </div>

          <div class="col-12 col-lg-5">
            <div class="content-30 p-2 text-center">
              <BookMainImagesCarousel :images="bookUtils.getMainThumbnails(book)" :edition="book.edition" />
            </div>
          </div>
        </div>
      </div>

      <BookRetailLinkList :retail-link-list="book.retail_links" />
      <BookComment :comment="book.author_comment" />
      <BookSecondaryImagesCarousel :images="bookUtils.getSecondaryThumbnails(book)" />
      <button class="btn btn-primary mt-3" a11y-label="Revenir à la page d'accueil" @click="back()">
        <i class="bi bi-house-door-fill me-2"></i>
        <span>Revenir à la page d'accueil</span>
      </button>
    </div>
    <BookFooter class="mt-2" />
  </div>
</template>

<script>
import { commonStore } from '@/stores'
import { mapState, mapActions } from 'pinia'

import { routes } from '@/config'
import BookUtils from '@/utils/bookUtils'

import BookHeader from '@/components/pages/family-showcase/books/widgets/book-header.vue'
import BookDetailHeader from '@/components/pages/family-showcase/books/widgets/book-detail-header.vue'
import BookPdfOrDescriptionArea from '@/components/pages/family-showcase/books/widgets/book-pdf-or-description-area.vue'
import BookMainImagesCarousel from '@/components/pages/family-showcase/books/widgets/book-main-images-carousel.vue'
import BookRetailLinkList from '@/components/pages/family-showcase/books/widgets/book-retail-link-list.vue'
import BookComment from '@/components/pages/family-showcase/books/widgets/book-comment.vue'
import BookSecondaryImagesCarousel from '@/components/pages/family-showcase/books/widgets/book-secondary-images-carousel.vue'
import BookFooter from '@/components/pages/family-showcase/books/widgets/book-footer.vue'

export default {
  components: {
    BookHeader,
    BookDetailHeader,
    BookPdfOrDescriptionArea,
    BookMainImagesCarousel,
    BookRetailLinkList,
    BookComment,
    BookSecondaryImagesCarousel,
    BookFooter
  },
  data() {
    return {
      isLoading: true,
      routes: routes,
      bookUtils: new BookUtils(),
      book: {}
    }
  },
  async created() {
    await this.bookUtils.fetchBooks()
    this.book = this.bookUtils.getBookById(this.$route.params.id)
  },
  mounted() {
    this.setLoading(true)
    // on simule un timeout de 200ms just for fun
    setTimeout(() => {
      this.setLoading(false)
    }, 200)
  },
  computed: {
    ...mapState(commonStore, ['loading'])
  },
  methods: {
    ...mapActions(commonStore, ['setLoading']),
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#app-main-div {
  width: 90%;
  margin: 0 auto;
}

.content-70,
.content-30 {
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f8f9fa;
}

.content-70 {
  height: 100%; /* Assure que la section de 70% prenne toute la hauteur disponible */
}

.content-30 {
  height: 100%; /* Assure que la section de 30% prenne toute la hauteur disponible */
}
</style>
