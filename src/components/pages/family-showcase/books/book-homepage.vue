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
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
