<template>
  <div class="book-comment mt-3">
    <p>Zone de commentaire de l’auteur (facultatif)</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper metus turpis, ac gravida nunc condimentum nec.</p>
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
.book-comment {
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid var(--bs-border-color); /* Utilise la couleur de bordure par défaut de Bootstrap */
  border-radius: 0.25rem;
  padding: 10px 0;
  text-align: center;
  flex-grow: 1;
}

.book-comment p {
  margin: 0 20px 0 20px;
  line-height: 1.5;
}
</style>
