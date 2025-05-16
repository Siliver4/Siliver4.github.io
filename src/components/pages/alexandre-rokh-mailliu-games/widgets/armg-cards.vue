<template>
  <div class="mt-4">
    <div class="row g-3">
      <!-- Boucle sur chaque jeu de la liste des jeux -->
      <div v-for="game in armg" :key="game.id" class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 mb-4">
        <div class="card h-100 clickable-card">
          <img
            :src="'/assets/alexandre-rokh-mailliu-games/' + game.id + '/' + game.game_cover"
            class="card-img-top img-bordered"
            alt="Game Cover"
          />
          <div class="card-header">
            <h5 class="card-title">{{ game.title }}</h5>
          </div>
          <div class="card-body">
            <div>
              <!-- Section 1 : Press Kit + boutons 0 et 1 -->
              <p class="card-text">
                <small class="text-muted">Press Kit & Complete Credit:</small>
              </p>
              <div class="row g-1 mt-3">
                <div v-for="(button, index) in game.button_list.slice(0, 2)" :key="'button-presskit-' + button.enum_button" class="col-6 d-flex">
                  <button
                    class="armg-button btn btn-secondary w-100 h-100"
                    :style="{ backgroundColor: getButtonColor(button.enum_button) }"
                    @click="openLink(button.url)"
                  >
                    <img :src="getButtonImage(button.enum_button)" alt="Rokh" class="armg-button-image" />
                    <span class="armg-button-span">{{ getButtonLabel(button.enum_button) }}</span>
                  </button>
                </div>
              </div>

              <!-- Section 2 : Watch content + boutons 2 et 3 -->
              <p class="card-text mt-3">
                <small class="text-muted">Watch videos or live streams about my game here:</small>
              </p>
              <div class="row g-1 mt-2">
                <div v-for="(button, index) in game.button_list.slice(2, 4)" :key="'button-watch-' + button.enum_button" class="col-6 d-flex">
                  <button
                    class="armg-button btn btn-secondary w-100 h-100"
                    :style="{ backgroundColor: getButtonColor(button.enum_button) }"
                    @click="openLink(button.url)"
                  >
                    <img :src="getButtonImage(button.enum_button)" alt="Rokh" class="armg-button-image" />
                    <span class="armg-button-span">{{ getButtonLabel(button.enum_button) }}</span>
                  </button>
                </div>
              </div>

              <!-- Section 3 : Acheter le jeu + tous les boutons à partir de l'index 4 -->
              <p class="card-text mt-3">
                <small class="text-muted">Buy the game here:</small>
              </p>
              <div class="row g-1 mt-2">
                <div v-for="(button, index) in game.button_list.slice(4)" :key="'button-buy-' + button.enum_button" class="col-6 d-flex">
                  <button
                    class="armg-button btn btn-secondary w-100 h-100"
                    :style="{ backgroundColor: getButtonColor(button.enum_button) }"
                    @click="openLink(button.url)"
                  >
                    <img :src="getButtonImage(button.enum_button)" alt="Rokh" class="armg-button-image" />
                    <span class="armg-button-span">{{ getButtonLabel(button.enum_button) }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlexandreRokhMailliuGamesUtils from '@/utils/alexandreRokhMailliuGamesUtils'
import { EnumAlexandreRokhMailliuGamesButton } from '@/constants/alexandreRokhMailliuGamesConstants'

export default {
  props: {
    armg: []
  },
  data() {
    return {
      alexandreRokhMailliuGamesUtils: new AlexandreRokhMailliuGamesUtils()
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
    goToBookDetail(id) {
      this.$router.push({ name: 'bookDetail', params: { id } })
    },
    getButtonColor(enumButton) {
      switch (enumButton) {
        case EnumAlexandreRokhMailliuGamesButton.PRESSKIT:
          return '#EDB000' // #FECE00 #EDB000
        case EnumAlexandreRokhMailliuGamesButton.COMPLETE_CREDIT:
          return '#F38CFF'
        case EnumAlexandreRokhMailliuGamesButton.YOUTUBE_CONTENT:
          return '#FF0000'
        case EnumAlexandreRokhMailliuGamesButton.TWITCH_CONTENT:
          return '#6441A5'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_STEAM:
          return '#282E39'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_ITCHIO:
          return '#FA5C5C'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES:
          return '#444444'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH:
          return '#E60012'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS5:
          return '#0072CE'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS6:
          return '#003A93'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX:
          return '#107C10'
      }
    },
    getButtonLabel(enumButton) {
      switch (enumButton) {
        case EnumAlexandreRokhMailliuGamesButton.PRESSKIT:
          return 'Press Kit'
        case EnumAlexandreRokhMailliuGamesButton.COMPLETE_CREDIT:
          return 'Complete Credit'
        case EnumAlexandreRokhMailliuGamesButton.YOUTUBE_CONTENT:
          return 'YouTube Content'
        case EnumAlexandreRokhMailliuGamesButton.TWITCH_CONTENT:
          return 'Twitch Content'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_STEAM:
          return 'Steam'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_ITCHIO:
          return 'itch.io'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES:
          return 'Epic Games'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH:
          return 'Nintendo Switch'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS5:
          return 'Playstation 5'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS6:
          return 'Playstation 6'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX:
          return 'Xbox'
      }
    },
    getButtonImage(enumButton) {
      switch (enumButton) {
        case EnumAlexandreRokhMailliuGamesButton.PRESSKIT:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_presskit.png'
        case EnumAlexandreRokhMailliuGamesButton.COMPLETE_CREDIT:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_credit.png'
        case EnumAlexandreRokhMailliuGamesButton.YOUTUBE_CONTENT:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_youtube.png'
        case EnumAlexandreRokhMailliuGamesButton.TWITCH_CONTENT:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_twitch.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_STEAM:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_steam.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_ITCHIO:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_itch.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_epic.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_switch.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS5:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_playstation.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS6:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_playstation.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX:
          return '/assets/alexandre-rokh-mailliu-games/common/miniwhite_xb1.png'
      }
    }
  }
}
</script>

<style scoped>
.card {
  border-bottom: 4px solid var(--bs-border-color); /* Utilise la couleur de bordure par défaut de Bootstrap */
}
.card-header {
  height: 70px;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Pour s'assurer que les éléments sont uniformément distribués */
}
.img-bordered {
  border-bottom: 2px solid var(--bs-border-color); /* Utilise la couleur de bordure par défaut de Bootstrap */
}
.card-text {
  margin-bottom: 0.5rem;
}
.text-muted {
  font-weight: bold;
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
/*@media (max-width: 978px) and (min-width: 768px) {
  .armg-button-span {
    display: none;
  }
}*/
.mt-auto {
  /*margin-top: auto; /* Pousse le badge en bas */
  /*align-items: start; /* Centre horizontalement les éléments */
  /*justify-content: start; /* Centre verticalement les éléments */
  /*text-align: start; /* Centre le texte à l'intérieur des éléments */
}

/* Conteneur de genres limité à deux lignes */
.genres-container {
  max-height: 4rem;
  overflow: hidden;
}

/* Indiquer que la carte est cliquable en changeant le curseur */
.clickable-card {
  /*cursor: pointer;*/
}

/* Cible uniquement les écrans de grande taille (Bootstrap col-xxl-2) */
@media (min-width: 1400px) {
  .clickable-card {
    transition:
      border 0.2s ease,
      transform 0.2s ease;
  }

  /* Ajouter un effet de survol pour augmenter l'épaisseur de la bordure */
  .clickable-card:hover {
    border: 3px solid var(--bs-border-color);
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

/* Cible uniquement tous les écrans plus petits que les écrans de grande taille (Bootstrap col-xxl-2) */
@media (max-width: 1400px) {
  .clickable-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
