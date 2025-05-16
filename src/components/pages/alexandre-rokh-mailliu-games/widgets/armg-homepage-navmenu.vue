<template>
  <div class="homepage-navigation text-center">
    <ul class="nav nav-pills mb-2 justify-content-center" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.ABOUT_ME }"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          :aria-selected="navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.ABOUT_ME"
          @click="goToArmgAboutMePage()"
        >
          About me
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.MY_GAMES }"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          :aria-selected="navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.MY_GAMES"
          @click="goToArmgMyGamesPage()"
        >
          My Games
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.FOLLOW_ME }"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          :aria-selected="navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.FOLLOW_ME"
          @click="goToArmgFollowMePage()"
        >
          Follow me here or there
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.CONTACT_ME }"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          :aria-selected="navigation_menu_selected === EnumAlexandreRokhMailliuGamesNavigationMenu.CONTACT_ME"
          @click="goToArmgContactMePage()"
        >
          Contact Me
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { EnumAlexandreRokhMailliuGamesNavigationMenu } from '@/constants/alexandreRokhMailliuGamesConstants'

export default {
  data() {
    return {
      EnumAlexandreRokhMailliuGamesNavigationMenu
    }
  },
  props: {
    navigation_menu_selected: String
  },
  methods: {
    goToArmgAboutMePage() {
      this.$router.push({ name: 'alexandreRokhMailliuGamesHomepageAboutMe' })
    },
    goToArmgMyGamesPage() {
      this.$router.push({ name: 'alexandreRokhMailliuGamesHomepageMyGames' })
    },
    goToArmgFollowMePage() {
      this.$router.push({ name: 'alexandreRokhMailliuGamesHomepageFollowMe' })
    },
    goToArmgContactMePage() {
      this.$router.push({ name: 'alexandreRokhMailliuGamesHomepageContactMe' })
    }
  }
}
</script>

<style scoped>
.homepage-navigation {
  width: 90%;
  margin: 0 auto;
  border-left: 3px solid var(--bs-border-color);
  border-right: 3px solid var(--bs-border-color);
  border-bottom: 3px solid var(--bs-border-color);
  border-top: none;
  border-radius: 0 0 0.25rem 0.25rem;
  background-color: #f8f9fa;
  padding-top: 10px;
  text-align: center;
  position: relative;
  font-weight: bold;
  font-size: 16px;
}

.homepage-navigation p {
  margin: 0 20px 0 20px;
  line-height: 1.5;
}
.homepage-navigation button.active {
  background-color: #f66b2f;
}
.homepage-navigation button:not(.active) {
  color: #f66b2f;
}
</style>
