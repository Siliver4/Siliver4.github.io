<template>
  <div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h2>Home Page2</h2>
    <button type="button" @click="$router.push(routes.youtubeWatcher)">youtubeWatcher</button>
    <button type="button" @click="$router.push(routes.rokhMusicPlaylist)">rokhMusicPlaylist</button>
    <button type="button" @click="$router.push(routes.musicChoiceMaker)">musicChoiceMaker</button>
    <button type="button" @click="$router.push(routes.movieChoiceMaker)">movieChoiceMaker</button>
    <button type="button" @click="$router.push(routes.videoGameChoiceMaker)">videoGameChoiceMaker</button>
    <button type="button" @click="$router.push(routes.rokhRolDocumentation)">rokhRolDocumentation</button>
    <button type="button" @click="$router.push(routes.rokhWosDocumentation)">rokhWosDocumentation</button>
    <button type="button" @click="$router.push(routes.nothing)">nothing</button>
  </div>
</template>

<script>
import { routes } from '@/config'

export default {
  data() {
    return {
      routes: routes
    }
  },
  methods: {
    goToNextPage() {
      console.log('coucou')
    }
  }
}
</script>
