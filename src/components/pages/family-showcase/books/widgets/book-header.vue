<template>
  <div>
    <header class="custom-header">
      <img src="/assets/books/rokh_logo_grey_fire.png" alt="Website Logo" class="header-logo d-none d-xxl-block" @click="goToBookHomepage()" />
      <div class="header-text">
        <h2>Bienvenue sur le site référençant les oeuvres littéraires de</h2>
        <h3>Mr A, Miss B and Mr C !</h3>
        <h4>Notre petite famille est créative et compte des écrivains, des musiciens, des vidéastes, et encore ce n'est pas tout !</h4>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  methods: {
    goToBookHomepage() {
      this.$router.push({ name: 'bookHomepage' })
    }
  }
}
</script>

<style scoped>
.custom-header {
  width: 98%;
  margin: 0 auto;
  border-left: 3px solid var(--bs-border-color);
  border-right: 3px solid var(--bs-border-color);
  border-bottom: 3px solid var(--bs-border-color);
  border-top: none;
  border-radius: 0 0 0.25rem 0.25rem;
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  position: relative;
}

.header-logo {
  cursor: pointer;
  position: absolute;
  margin-top: -12px;
  margin-left: 5px;
  left: 0px;
  height: 90%;
}

.header-text {
  max-width: 85%; /* Pour éviter que le texte ne dépasse trop sous le logo */
  margin: 0 auto;
}

.header-text h1,
.header-text h2,
.header-text h3 {
  margin: 0;
}
</style>
