<template>
  <div v-if="!loading">
    <ArmgHeader />
    <div id="app-main-div">
      <ArmgHomepageNavmenu :navigation_menu_selected="EnumAlexandreRokhMailliuGamesNavigationMenu.FOLLOW_ME" />

      <div class="mt-3">
        <br />
        <p>
          Hi there! If you want to follow what I do, you can do so by following me on X/Twitter or YouTube. I try to share my work as I progress
          through my projects, but it's tough to always think about capturing the moment. I'm often deeply plundge in my work so I definitly don't
          spam the news for now, but don't worry I'm working on it!
        </p>
        <br />
        <div class="mt-4">
          <div class="row g-3 justify-content-center">
            <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 mb-4 d-flex">
              <button
                class="armg-button btn btn-secondary w-100 h-100"
                @click="openLink('https://x.com/AlexMailliu')"
                :style="{ backgroundColor: '#1C96E8' }"
              >
                <img src="/assets/alexandre-rokh-mailliu-games/common/miniwhite_x_twitter.png" alt="X/Twitter" class="armg-button-image" />
                <span class="armg-button-span">My X/Twitter Account</span>
              </button>
            </div>
            <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 mb-4 d-flex">
              <button
                class="armg-button btn btn-secondary w-100 h-100"
                @click="openLink('https://www.youtube.com/@Alexandre-Rokh-Mailliu-Games')"
                :style="{ backgroundColor: '#FF0000' }"
              >
                <img src="/assets/alexandre-rokh-mailliu-games/common/miniwhite_youtube.png" alt="YouTube" class="armg-button-image" />
                <span class="armg-button-span">My YouTube Channel</span>
              </button>
            </div>
          </div>
        </div>
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
.armg-button {
  display: flex;
  align-items: center; /* centre verticalement */
  justify-content: center; /* optionnel : centre aussi horizontalement */
  gap: 0.5rem; /* espace entre image et texte */
  text-align: center;
}
.armg-button-image {
  width: 32px;
}
.armg-button-span {
  display: inline;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  margin-left: 5px;
}
</style>
