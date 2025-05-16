<template>
  <div v-if="!loading">
    <ArmgHeader />
    <div id="app-main-div">
      <ArmgHomepageNavmenu :navigation_menu_selected="EnumAlexandreRokhMailliuGamesNavigationMenu.MY_GAMES" />
      <ArmgHomepageDescription />
      <ArmgCards :armg="armg" />
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
import ArmgHomepageDescription from '@/components/pages/alexandre-rokh-mailliu-games/widgets/armg-homepage-description.vue'
import ArmgCards from '@/components/pages/alexandre-rokh-mailliu-games/widgets/armg-cards.vue'
import ArmgFooter from '@/components/pages/alexandre-rokh-mailliu-games/widgets/armg-footer.vue'

export default {
  components: {
    ArmgHeader,
    ArmgHomepageNavmenu,
    ArmgHomepageDescription,
    ArmgCards,
    ArmgFooter
  },
  data() {
    return {
      routes: routes,
      alexandreRokhMailliuGamesUtils: new AlexandreRokhMailliuGamesUtils(),
      EnumAlexandreRokhMailliuGamesNavigationMenu,
      armg: []
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
