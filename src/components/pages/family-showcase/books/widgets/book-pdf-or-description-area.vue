<template>
  <div class="pdf-viewer-container" :class="{ 'mt-3': !isMobile }" ref="pdfCanvasContainer">
    <template v-if="isMobile">
      <button @click="openPdfInNewTab" class="open-pdf-button clickable">Ouvrir le PDF dans un nouvel onglet</button>
    </template>

    <template v-else>
      <canvas @click="openPdfInNewTab" class="clickable" ref="pdfCanvas"></canvas>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div class="pdf-controls">
        <button @click="renderPreviousDocumentPage" :disabled="pageNum === 1">Previous</button>
        <button @click="renderNextDocumentPage" :disabled="pageNum === totalPages">Next</button>
      </div>
    </template>
  </div>
</template>

<script>
import { nextTick } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

export default {
  props: {
    pdf: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      width: null,
      height: null,
      pdfDoc: null,
      totalPages: 0,
      pageNum: 1
    }
  },
  async mounted() {
    if (!this.isMobile) {
      this.renderDocumentPageByIndex(1)
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 992
    }
  },
  methods: {
    openPdfInNewTab() {
      window.open(this.pdf, '_blank')
    },
    setCanvasDimentionAtFirstLoading() {
      if (null == this.width || null == this.height) {
        // Récupérer les dimensions du conteneur
        const container = this.$refs.pdfCanvasContainer
        this.width = container.clientWidth
        this.height = container.clientHeight * 1.1
      }
    },
    renderDocumentPageByIndex(pageIndex) {
      const loadingTask = pdfjsLib.getDocument(this.pdf)

      this.documentD = loadingTask.promise.then((document) => {
        console.log('PDF loaded')
        this.totalPages = document.numPages
        document.getPage(pageIndex).then((page) => this.renderPage(page))
      })
    },
    async renderPage(page) {
      console.log('Page loaded')

      const scale = 1.0 //1.5
      const viewport = page.getViewport({ scale })

      // Attendre que le DOM soit mis à jour pour obtenir les dimensions du conteneur
      await nextTick()

      const canvas = this.$refs.pdfCanvas
      const context = canvas.getContext('2d')

      // needs to be here so that the canvas always keeps the same width & height when switching pages
      this.setCanvasDimentionAtFirstLoading()

      canvas.height = this.height // '200' //viewport.height
      canvas.width = this.width //600 //'600' //viewport.width

      // Redimensionner le viewport pour correspondre aux dimensions du canvas
      const renderContext = {
        canvasContext: context,
        viewport: page.getViewport({ scale: this.width / viewport.width })
      }
      /*const renderContext = {
          canvasContext: context,
          viewport: viewport
        }*/

      const renderTask = page.render(renderContext)
      renderTask.promise.then(() => {
        console.log('Page rendered')
      })
    },

    renderPreviousDocumentPage() {
      if (this.pageNum > 1) {
        this.pageNum--
        this.renderDocumentPageByIndex(this.pageNum)
      }
    },

    renderNextDocumentPage() {
      if (this.pageNum < this.totalPages) {
        this.pageNum++
        this.renderDocumentPageByIndex(this.pageNum)
      }
    }
  }
}
</script>

<style scoped>
.pdf-viewer-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.open-pdf-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
}

.open-pdf-button:hover {
  background-color: #0056b3;
}

.pdf-controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.pdf-controls button {
  margin: 0 5px;
}

.loading {
  text-align: center;
  margin-top: 20px;
}

.error {
  color: red;
  text-align: center;
  margin-top: 20px;
}

.clickable {
  cursor: pointer;
}
</style>
