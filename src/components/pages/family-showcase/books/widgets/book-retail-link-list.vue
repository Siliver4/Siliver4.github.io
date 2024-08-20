<template>
  <div class="row g-1 mt-3">
    <div v-for="retailLink in retailLinkList" :key="retailLink" class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
      <button class="btn btn-secondary w-100" @click="openLink(retailLink.url)">Lien {{ retailLink.label }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    retailLinkList: {}
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    }
  }
}
</script>
