<template>
  <h4 class="mt-3">Information sur l'oeuvre :</h4>
  <p class="mt-3">{{ description }}</p>
</template>

<script>
export default {
  props: {
    pdf: String,
    description: String
  }
}
</script>
