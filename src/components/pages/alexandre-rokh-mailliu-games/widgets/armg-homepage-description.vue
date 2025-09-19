<template>
  <div class="homepage-description mt-3">
    <p>Hi there! Thanks for visiting my website. Here you'll find all the important links related to my games:</p>
    <p>
      → If you're an influencer, YouTuber, streamer, or journalist, check out the "Press Kit" button, it includes visual assets and a
      <code>readme</code> file with some behind-the-scenes insights about my work.
    </p>
    <p>
      → If you want to watch more content about my games, you'll find links to the YouTube topic page and Twitch category, they gather all the
      videos & recent live streams tagged with my games.
    </p>
    <p>→ If you're interested in buying my games, you'll find a list of all the platforms where they’re available.</p>
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
