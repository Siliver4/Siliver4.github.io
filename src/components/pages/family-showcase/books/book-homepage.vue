<template>
  <div v-if="!loading">
    <BookHeader />
    <div id="app-main-div">
      <BookHomepageDescription />
      <BookCards :grouped-books="groupAndSortBooksBySaga(books)" />
    </div>
    <BookFooter />
  </div>
</template>

<script>
import { commonStore } from '@/stores'
import { mapState, mapActions } from 'pinia'

import { routes } from '@/config'
import BookUtils from '@/utils/bookUtils'

import BookHeader from '@/components/pages/family-showcase/books/widgets/book-header.vue'
import BookHomepageDescription from '@/components/pages/family-showcase/books/widgets/book-homepage-description.vue'
import BookCards from '@/components/pages/family-showcase/books/widgets/book-cards.vue'
import BookFooter from '@/components/pages/family-showcase/books/widgets/book-footer.vue'

export default {
  components: {
    BookHeader,
    BookHomepageDescription,
    BookCards,
    BookFooter
  },
  data() {
    return {
      routes: routes,
      bookUtils: new BookUtils(),
      books: []
    }
  },
  async created() {
    await this.bookUtils.fetchBooks()
    this.books = this.bookUtils.getBooks()
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
    /**
     * 1.) on trie la liste des livres par saga dans l'ordre alphabétique des noms de saga.
     * Entrée [B;B;B;B;B;C;A;A;A;D;D] -> sortie [[A;A;A];[B;B;B;B;B];[C];[D;D]]
     *
     * 2.) on affiche de gauche à droite, et de haut en bas dans un tableau de taille width x height.
     * NB : sur smartphone on aurait une seule colonne contenant tous les livres
     * NB : sur tablette on aurait deux ou trois colonnes.
     * NB : sur pc on aurait quatre ou cinq ou six colonnes.
     */
    groupAndSortBooksBySaga(books) {
      // Étape 1: Trier les livres par le champ 'saga' en ordre alphabétique
      books.sort((a, b) => {
        // Si 'a' n'a pas de saga, on le place après 'b' s'il en a une
        if (!a.saga && b.saga) return 1
        // Si 'b' n'a pas de saga, on le place après 'a' s'il en a une
        if (a.saga && !b.saga) return -1
        // Si les deux livres ont ou n'ont pas de saga, on compare les sagas
        if (a.saga && b.saga) {
          return a.saga.localeCompare(b.saga)
        }
        // Si les deux livres n'ont pas de saga, on les considère égaux
        return 0
      })

      // Étape 2: Grouper les livres par leur saga
      const groupedBooks = []
      let currentGroup = []
      let currentSaga = books[0]?.saga

      books.forEach((book) => {
        if (book.saga === currentSaga) {
          currentGroup.push(book)
        } else {
          groupedBooks.push(currentGroup)
          currentGroup = [book]
          currentSaga = book.saga
        }
      })

      // Ajouter le dernier groupe
      if (currentGroup.length > 0) {
        groupedBooks.push(currentGroup)
      }

      return groupedBooks
    }
  }
}
</script>

<style scoped>
#app-main-div {
  width: 90%;
  margin: 0 auto;
}
</style>
