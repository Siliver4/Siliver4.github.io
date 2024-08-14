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

  <template v-for="book in books" :key="book.id">
    <img :src="bookUtils.getFirstMainImage(book)" class="d-block w-100" alt="..." />
  </template>
</template>

<script>
import { routes } from '@/config'
import BookUtils from '@/utils/bookUtils'

export default {
  data() {
    return {
      routes: routes,
      bookUtils: new BookUtils(),
      books: []
    }
  },
  methods: {
    back() {
      this.$router.push({ name: 'default' })
    }
  },
  async created() {
    await this.bookUtils.fetchBooks()
    this.books = this.bookUtils.getBooks()
  }
}
</script>
