<template>
  <div>
    <header class="custom-header">
      <img
        src="/assets/alexandre-rokh-mailliu-games/common/avatar_alexmaigames.png"
        alt="Alexandre 'Rokh' Mailliu Games Logo"
        class="header-logo d-none d-xxl-block"
        @click="alexandreRokhMailliuGamesHomepageMyGames()"
      />
      <div class="header-text">
        <h2>Alexandre 'Rokh' Mailliu Games</h2>
        <h3>“A solo wing, to bring them all, and in the games, bind them.”</h3>
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
    alexandreRokhMailliuGamesHomepageMyGames() {
      this.$router.push({ name: 'alexandreRokhMailliuGamesHomepageMyGames' })
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
