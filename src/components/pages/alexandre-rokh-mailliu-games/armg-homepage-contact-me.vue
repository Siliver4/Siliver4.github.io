<template>
  <div v-if="!loading">
    <ArmgHeader />
    <div id="app-main-div">
      <ArmgHomepageNavmenu :navigation_menu_selected="EnumAlexandreRokhMailliuGamesNavigationMenu.CONTACT_ME" />
      <div class="mt-3">
        <br />
        <p>Hi there! If you want you can contact me by:</p>
        <p>
          → sending me a message or replying to one of my tweets on my
          <a href="https://x.com/AlexMailliu" target="_blank" rel="my X/Twitter account">X/Twitter account</a>
        </p>

        <p>→ sending me an email at alexandre.rokh.mailliu.games@gmail.com</p>
        <p>
          → you can also send me messages through the Steam Hubs of my games or comment on my videos on my YouTube channel but it may take me a
          little longer to respond to those as I don't check them as often, for now.
        </p>
      </div>
      <br />
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
