<style>
.rowalex {
  display: flex;
}

.left {
  width: 40%;
}

.right {
  width: 60%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 800px;
  border: 2px dashed lightgrey;
}

#dropContainer {
  cursor: pointer;
  font-size: 16px;
}
</style>

<template>
  <button model="tertiary" a11y-label="Ce bouton est de type discret" @click="back()">
    <span>revenir</span>
  </button>

  <h2 tag="h2">rokhMusicPlaylist Page</h2>

  <input type="text" id="fname" name="fname" />

  <div class="rowalex">
    <div id="dropContainer" class="left center">
      <p>Drag and drop me some youtube url here please I'm hungry...</p>
    </div>
    <div id="youtubewatcher" class="right center">
      <iframe
        id="myIframe"
        width="1092"
        height="614"
        :src="youtubeIframeUrl"
        title="Own stuff"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      youtubeIframeUrl: 'https://www.youtube.com/embed/dBKQvCiczAw?list=RDEM5Rr5gluobeH1omam_Q0s8w'
    }
  },
  mounted() {
    var dropContainer = document.getElementById('dropContainer')

    // Prevent default behavior to allow drop
    dropContainer.addEventListener('dragover', (e) => {
      e.preventDefault()
      dropContainer.style.border = '2px dashed black'
    })

    // Handle the drop event
    dropContainer.addEventListener('drop', (e) => {
      e.preventDefault()
      dropContainer.style.border = '2px dashed black'

      // Get the dropped URL
      var url = e.dataTransfer.getData('text/plain')

      // Process the URL as needed
      console.log('Dropped URL: ' + url)
      this.handleOnDropAction(url)
    })

    // Reset border when leaving the drop area
    dropContainer.addEventListener('dragleave', () => {
      dropContainer.style.border = '2px dashed #ccc'
    })
  },
  beforeUnmount() {
    window.removeEventListener('dragover')
    window.removeEventListener('drop')
    window.removeEventListener('dragleave')
  },
  methods: {
    back() {
      this.$router.back()
    },
    handleOnDropAction(youtubeUrl) {
      try {
        const urlData = new URL(youtubeUrl)
        const paramV = urlData.searchParams.get('v')
        const paramList = urlData.searchParams.get('list')
        const paramPlaylist = urlData.searchParams.get('playlist')

        if (urlData.href.includes('/embed')) {
          this.youtubeIframeUrl = 'https://www.youtube.com' + urlData.pathname
        } else {
          this.youtubeIframeUrl = 'https://www.youtube.com/embed/' + paramV
        }

        if (paramList) {
          this.youtubeIframeUrl += '?list=' + paramList
        } else if (paramPlaylist) {
          this.youtubeIframeUrl += '?playlist=' + paramPlaylist
        }
        console.log('updated to : ' + this.youtubeIframeUrl)
      } catch (err) {
        console.log('ERROR [BAD URL] : ' + err)
      }
    }
    // unit test :
    /*
Dropped URL: https://www.youtube.com/embed/dBKQvCiczAw?list=RDEM5Rr5gluobeH1omam_Q0s8w
updated to : https://www.youtube.com/embed/dBKQvCiczAw?list=RDEM5Rr5gluobeH1omam_Q0s8w

Dropped URL: https://www.youtube.com/watch?v=dBKQvCiczAw&list=RDEM5Rr5gluobeH1omam_Q0s8w
updated to : https://www.youtube.com/embed/dBKQvCiczAw?list=RDEM5Rr5gluobeH1omam_Q0s8w

Dropped URL: https://www.youtube.com/embed/Hfsn9z0VbqM?playlist=Hfsn9z0VbqM,GR82-bE4w4k,FKAhxTCiCiQ
updated to : https://www.youtube.com/embed/Hfsn9z0VbqM?playlist=Hfsn9z0VbqM,GR82-bE4w4k,FKAhxTCiCiQ
    */
  }
}
</script>
