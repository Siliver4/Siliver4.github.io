<template>
  <div class="homepage-description mt-3">
    <p>
      Sur ce site vous retrouverez les différentes oeuvres littéraires de notre petite famille. Dans la liste de livre ci-dessous il vous suffit de
      cliquer sur l’un d’entre eux pour afficher sa page de détail. Vous y retrouverez le résumé ou bien le premier chapitre, la première de
      couverture, des liens vers les sites marchands dans le cas où l’oeuvre à été publié chez un éditeur, ainsi que d’éventuel images et
      commentaires du/des auteur(s) pour accompagner la description d’un livre.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
.homepage-description {
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid var(--bs-border-color); /* Utilise la couleur de bordure par défaut de Bootstrap */
  border-radius: 0.25rem;
  padding: 10px 0;
  text-align: center;
  flex-grow: 1;
}

.homepage-description p {
  margin: 0 20px 0 20px;
  line-height: 1.5;
}
</style>
