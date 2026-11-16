<template>
  <div v-if="!loading">
    <ArmgHeader />
    <div id="app-main-div">
      <!-- <ArmgHomepageNavmenu :navigation_menu_selected="EnumAlexandreRokhMailliuGamesNavigationMenu.ABOUT_ME" /> -->

      <div class="mt-3">
        <br />
        <h1>Google Play Store Privacy Policy - It's Chopping Time!</h1>

        <p>Last updated: November 16, 2026.</p>

        <h2>1. Overview</h2>
        <p>
          This privacy policy applies to the Google Play Store mobile app
          <strong>It's Chopping Time!</strong>, developed by <strong>Alexandre Mailliu</strong> also known as
          <strong>Alexandre 'Rokh' Mailliu</strong> also known as <strong>Alexandre 'Rokh' Mailliu Games</strong>.
        </p>

        <p>This concerns my game <strong>It's Chopping Time!</strong> for the following designations:</p>
        <ul>
          <li>It's Chopping Time!</li>
          <li>It's Chopping Time! - Gold Ed.</li>
          <li>It's Chopping Time! - Gold Edition</li>
        </ul>

        <h2>2. Data Collected</h2>
        <p><strong>It's Chopping Time!</strong> does not collect, remotely store, or share any personally identifiable information.</p>

        <p>
          The game does not request access to your contacts, your location, your microphone, your camera, your personal files, or any other
          sensitive data on your device.
        </p>

        <h2>3. Local Saves</h2>
        <p><strong>It's Chopping Time!</strong> game settings and progress can be saved locally on your device, in the app's private storage.</p>

        <p>
          This data is neither sent to a server nor shared with third parties. It remains on your device and can be deleted by uninstalling the app
          or clearing its data in the Android settings.
        </p>

        <h2>4. Advertisements and Analysis</h2>
        <p>
          <strong>It's Chopping Time!</strong> does not contain advertisements, does not use audience analytics services, and does not share data
          with third parties.
        </p>

        <h2>5. Children</h2>
        <p><strong>It's Chopping Time!</strong> does not knowingly collect personal information from children.</p>

        <h2>6. Updates</h2>
        <p>
          This policy may be updated if <strong>It's Chopping Time!</strong> game's features change. The date of the last update will then be
          updated on this page.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have any questions regarding privacy, you can contact me at:
          <a href="mailto:alexandre.rokh.mailliu.games@gmail.com">alexandre.rokh.mailliu.games@gmail.com</a>
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
