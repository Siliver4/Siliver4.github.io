<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

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
  }
}
</script>

<style>
#app {
  display: block;
}
</style>
