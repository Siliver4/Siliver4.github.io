<template>
  <div id="app">
    <div class="loader-container" v-if="loading">
      <div class="spinner-border text-secondary">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import { commonStore } from '@/stores'
import { mapState } from 'pinia'

export default {
  components: {
    RouterView
  },
  watch: {
    $route(to) {
      // Récupérer le nom de la route ou un autre attribut défini dans la route
      const pageTitle = to.meta.title || 'Family Showcase'
      document.title = pageTitle
    }
  },
  computed: {
    ...mapState(commonStore, ['loading'])
  }
}
</script>

<style>
#app {
  display: block;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Prend toute la hauteur de la fenêtre */
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
