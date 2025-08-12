<template>
  <div v-if="!loading">
    <ArmgHeader />
    <div id="app-main-div">
      <ArmgHomepageNavmenu :navigation_menu_selected="EnumAlexandreRokhMailliuGamesNavigationMenu.ABOUT_ME" />

      <div class="mt-3">
        <br />
        <p>Hi there! I'm the solo indie developer of 'The Duck Amikaze Strikes Back' & 'Gran Theft Lure' which you can find on Steam.</p>
        <p>
          After 5 years working as a web developer, I could no longer find any meaning in what I was doing, and I desperately needed to reconnect
          with my inner self.
        </p>
        <p>
          I've always dreamt of making games, and honestly since I've started this new journey in summer 2024, I've never felt more fulfilled or
          happier in my day-to-day life.
        </p>
        <p>
          I'll do my very best to create the kind of games I’ve always wanted to play. And if I’m good (and lucky) enough, I hope to bring to life
          some of the crispy ideas I’ve carried with me since I was a kid.
        </p>
        <br />
        <p>
          I've been influenced a lot by games like The Legend of Zelda: Twilight Princess, The Legend of Zelda: Minish Cap, Kirby NES, Rayman 1 & 2
          & 3, Pokemon Emerald, Shovel Knight, DmC: Devil May Cry, Bioshock, Bioshock Infinite, Brütal Legend, Psychonauts, Hitman Absolution...
          among so many others. There is not enough of a lifetime anymore, to fully discover all the wonders in the world.
        </p>
        <br />
        <p>
          My favorite game is the Steam remastered version of Bayonetta. My binded-soul game will always be The Legend of Zelda: Twilight Princess.
          My favorite movie is Spartacus (1960). My favorite music is Black Velvet from Alannah Myles. My favorite color is red. And my favorite
          moment of the day is a cozy hot drink while there is rain falling on my roof.
        </p>
        <br />
        <p>I'm the kind of person that always trys to do the best as possible with as few ressources as possible.</p>
        <br />
        <p>
          Finally, when I was younger, I always thought that when I grew up I would write books to share my dreams, but life kinda randomly brought
          me into the development world, so instead of writing those stories, I think I'll bring some of them to life through my games. Maybe even
          all of them. We'll see!
        </p>
        <br />
        <br />
      </div>
    </div>
    <ArmgFooter />
  </div>
</template>

<script>
import { commonStore } from '@/stores'
import { mapState, mapActions } from 'pinia'

import { routes } from '@/config'
import AlexandreRokhMailliuGamesUtils from '@/utils/alexandreRokhMailliuGamesUtils'
import { EnumAlexandreRokhMailliuGamesNavigationMenu } from '@/constants/alexandreRokhMailliuGamesConstants'

import ArmgHeader from '@/components/pages/alexandre-rokh-mailliu-games/widgets/armg-header.vue'
import ArmgHomepageNavmenu from '@/components/pages/alexandre-rokh-mailliu-games/widgets/armg-homepage-navmenu.vue'
import ArmgFooter from '@/components/pages/alexandre-rokh-mailliu-games/widgets/armg-footer.vue'

export default {
  components: {
    ArmgHeader,
    ArmgHomepageNavmenu,
    ArmgFooter
  },
  data() {
    return {
      routes: routes,
      alexandreRokhMailliuGamesUtils: new AlexandreRokhMailliuGamesUtils(),
      EnumAlexandreRokhMailliuGamesNavigationMenu
    }
  },
  async created() {
    await this.alexandreRokhMailliuGamesUtils.fetchAlexandreRokhMailliuGames()
    this.armg = this.alexandreRokhMailliuGamesUtils.getAlexandreRokhMailliuGames()
  },
  mounted() {
    this.setLoading(true)
    // on simule un timeout de 200ms just for fun
    setTimeout(() => {
      this.setLoading(false)
    }, 200)
  },
  computed: {
    ...mapState(commonStore, ['loading'])
  },
  methods: {
    ...mapActions(commonStore, ['setLoading']),
    openLink(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
#app-main-div {
  width: 90%;
  margin: 0 auto;
}
</style>
