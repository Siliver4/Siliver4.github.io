<template>
  <div>
    <footer class="custom-footer">
      <div class="footer-text">
        <p>Auteur du site : Alexandre Mailliu</p>
      </div>
    </footer>
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
.custom-footer {
  width: 98%;
  margin: 0 auto;
  border-left: 3px solid var(--bs-border-color);
  border-right: 3px solid var(--bs-border-color);
  border-top: 3px solid var(--bs-border-color);
  border-bottom: none;
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: #f8f9fa;
  padding: 1px;
  text-align: center;
}

.custom-footer p {
  margin-bottom: 0;
}
</style>
