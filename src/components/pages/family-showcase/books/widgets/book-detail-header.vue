<template>
  <div>
    <div class="book-detail-header">
      <h4>{{ title + ' (' + author + ')' }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    author: String
  }
}
</script>

<style scoped>
.book-detail-header {
  margin: 0 auto;
  border-left: 3px solid var(--bs-border-color);
  border-right: 3px solid var(--bs-border-color);
  border-bottom: 3px solid var(--bs-border-color);
  border-top: none;
  border-radius: 0 0 0.25rem 0.25rem;
  background-color: #f8f9fa;
  padding-top: 5px;
  text-align: center;
  position: relative;
}
</style>
