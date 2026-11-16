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
              <!-- // Mon ancien système
              <div class="row g-1">
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
              -->
              <div class="row g-1">
                <div
                  v-for="button in getButtonsForSection(game, presskitButtons)"
                  :key="'button-presskit-' + button.enum_button"
                  class="col-6 d-flex"
                >
                  <button
                    class="armg-button btn btn-secondary w-100 h-100"
                    :class="getButtonStyleClass(button.enum_button)"
                    :style="{ backgroundColor: getButtonColor(button.enum_button) }"
                    @click="openButton(button)"
                  >
                    <img :src="getButtonImage(button.enum_button)" alt="Rokh" class="armg-button-image" />
                    <span class="armg-button-span">
                      {{ getButtonLabel(button.enum_button) }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Section 2 : Watch content + boutons 2 et 3 -->
              <p class="card-text mt-3">
                <small class="text-muted">Watch videos or recent live streams about my game here:</small>
              </p>
              <!-- // Mon ancien système
              <div class="row g-1">
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
              -->
              <div class="row g-1">
                <div
                  v-for="button in getButtonsForSection(game, contentButtons)"
                  :key="'button-content-' + button.enum_button"
                  class="col-6 d-flex"
                >
                  <button
                    class="armg-button btn btn-secondary w-100 h-100"
                    :class="getButtonStyleClass(button.enum_button)"
                    :style="{ backgroundColor: getButtonColor(button.enum_button) }"
                    @click="openButton(button)"
                  >
                    <img :src="getButtonImage(button.enum_button)" alt="Rokh" class="armg-button-image" />
                    <span class="armg-button-span">
                      {{ getButtonLabel(button.enum_button) }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Section 3 : Acheter le jeu + tous les boutons à partir de l'index 4 -->
              <p class="card-text mt-3">
                <small class="text-muted">Buy my game here:</small>
              </p>
              <!-- // Mon ancien système
              <div class="row g-1">
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
              -->
              <div class="row g-1">
                <div v-for="button in getButtonsForSection(game, storeButtons)" :key="'button-store-' + button.enum_button" class="col-6 d-flex">
                  <button
                    class="armg-button btn btn-secondary w-100 h-100"
                    :class="getButtonStyleClass(button.enum_button)"
                    :style="{ backgroundColor: getButtonColor(button.enum_button) }"
                    @click="openButton(button)"
                  >
                    <img :src="getButtonImage(button.enum_button)" alt="Rokh" class="armg-button-image" />
                    <span class="armg-button-span">
                      {{ getButtonLabel(button.enum_button) }}
                    </span>
                  </button>
                </div>

                <template v-if="hasButtonsForSection(game, googleplaystoreButtons)">
                  <!-- Section 4 : Spécifique au Google Play Store : Acheter le jeu + Privacy Policy -->
                  <!-- Specific twin links to buy my game for an Android Smartphone: -->
                  <!-- Privacy Policy: -->
                  <p class="card-text mt-3">
                    <small class="text-muted">Specific twin links to buy my game for an Android Smartphone:</small>
                  </p>
                  <div class="row g-1">
                    <div
                      v-for="button in getButtonsForSection(game, googleplaystoreButtons)"
                      :key="'button-googleplaystore-' + button.enum_button"
                      class="col-6 d-flex"
                    >
                      <button
                        class="armg-button btn btn-secondary w-100 h-100"
                        :class="getButtonStyleClass(button.enum_button)"
                        @click="openButton(button)"
                      >
                        <img :src="getButtonImage(button.enum_button)" alt="Rokh" class="armg-button-image" />
                        <span class="armg-button-span">
                          {{ getButtonLabel(button.enum_button) }}
                        </span>
                      </button>
                    </div>
                  </div>
                </template>
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
      alexandreRokhMailliuGamesUtils: new AlexandreRokhMailliuGamesUtils(),

      presskitButtons: [EnumAlexandreRokhMailliuGamesButton.PRESSKIT, EnumAlexandreRokhMailliuGamesButton.COMPLETE_CREDIT],

      contentButtons: [EnumAlexandreRokhMailliuGamesButton.YOUTUBE_CONTENT, EnumAlexandreRokhMailliuGamesButton.TWITCH_CONTENT],

      storeButtons: [
        EnumAlexandreRokhMailliuGamesButton.BUY_ON_STEAM,
        EnumAlexandreRokhMailliuGamesButton.DEMO_ON_ITCHIO,
        EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX,
        EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH,
        EnumAlexandreRokhMailliuGamesButton.BUY_ON_PLAYSTATION,
        EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES
      ],

      googleplaystoreButtons: [
        EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_BUY_ME,
        EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_PRIVACY_POLICY
      ]
    }
  },
  methods: {
    // openLink(url) {
    //   window.open(url, '_blank')
    // },
    openButton(button) {
      if (button.route_name) {
        this.$router.push({
          name: button.route_name
        })

        return
      }

      if (button.url) {
        window.open(button.url, '_blank')
      }
    },
    goToBookDetail(id) {
      this.$router.push({ name: 'bookDetail', params: { id } })
    },
    getButtonsForSection(game, enumList) {
      return game.button_list.filter((button) => enumList.includes(button.enum_button))
    },
    hasButtonsForSection(game, enumList) {
      return this.getButtonsForSection(game, enumList).length > 0
    },
    getButtonStyleClass(enumButton) {
      switch (enumButton) {
        case EnumAlexandreRokhMailliuGamesButton.PRESSKIT:
          return 'armg-button-rainbow-presskit' // #FECE00 #EDB000
        case EnumAlexandreRokhMailliuGamesButton.COMPLETE_CREDIT:
          return 'armg-button-rainbow-credit'
        case EnumAlexandreRokhMailliuGamesButton.YOUTUBE_CONTENT:
          return 'armg-button-rainbow-youtube'
        case EnumAlexandreRokhMailliuGamesButton.TWITCH_CONTENT:
          return 'armg-button-rainbow-twitch'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_STEAM:
          return 'armg-button-rainbow-steam'
        case EnumAlexandreRokhMailliuGamesButton.DEMO_ON_ITCHIO:
          return 'armg-button-rainbow-itchio'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_ITCHIO:
          return 'armg-button-rainbow-itchio'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES:
          return 'armg-button-rainbow-epic-games'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH:
          return 'armg-button-rainbow-switch'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PLAYSTATION:
          return 'armg-button-rainbow-playstation'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS5:
          return 'armg-button-rainbow-playstation'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS6:
          return 'armg-button-rainbow-playstation'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX:
          return 'armg-button-rainbow-xbox'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_BUY_ME:
          return 'armg-button-rainbow-google-play-store'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_PRIVACY_POLICY:
          return 'armg-button-rainbow-google-play-store'
      }
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
        case EnumAlexandreRokhMailliuGamesButton.DEMO_ON_ITCHIO:
          return '#FA5C5C'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_ITCHIO:
          return '#FA5C5C'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES:
          return '#444444'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH:
          return '#E60012'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PLAYSTATION:
          return '#0072CE'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS5:
          return '#0072CE'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS6:
          return '#003A93'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX:
          return '#107C10'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_BUY_ME:
          return '#107C10'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_PRIVACY_POLICY:
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
        case EnumAlexandreRokhMailliuGamesButton.DEMO_ON_ITCHIO:
          return 'itch.io (Demo Only)'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_ITCHIO:
          return 'itch.io'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES:
          return 'Epic Games'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH:
          return 'Nintendo Switch'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PLAYSTATION:
          return 'Playstation'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS5:
          return 'Playstation 5'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS6:
          return 'Playstation 6'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX:
          return 'Xbox'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_BUY_ME:
          return 'Google Play Store'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_PRIVACY_POLICY:
          return 'Privacy Policy' //'Google Play Store (Privacy Policy)'
      }
    },
    getButtonImage(enumButton) {
      switch (enumButton) {
        case EnumAlexandreRokhMailliuGamesButton.PRESSKIT:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_presskit.png'
        case EnumAlexandreRokhMailliuGamesButton.COMPLETE_CREDIT:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_credit.png'
        case EnumAlexandreRokhMailliuGamesButton.YOUTUBE_CONTENT:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_youtube.png'
        case EnumAlexandreRokhMailliuGamesButton.TWITCH_CONTENT:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_twitch.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_STEAM:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_steam.png'
        case EnumAlexandreRokhMailliuGamesButton.DEMO_ON_ITCHIO:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_itch.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_ITCHIO:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_itch.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_EPIC_GAMES:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_epic.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_SWITCH:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_switch.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PLAYSTATION:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_playstation.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS5:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_playstation.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_PS6:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_playstation.png'
        case EnumAlexandreRokhMailliuGamesButton.BUY_ON_XBOX:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_xb1.png'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_BUY_ME:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_playstore.png'
        case EnumAlexandreRokhMailliuGamesButton.GOOGLE_PLAY_STORE_PRIVACY_POLICY:
          return '/assets/alexandre-rokh-mailliu-games/common/redone/bb/miniwhite_playstore.png'
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

  color: #fff; /* #111*/
  /*text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);*/

  -webkit-text-stroke: 2px #000;
  paint-order: stroke fill;

  text-shadow:
    0px 0px 4px rgba(0, 0, 0, 0.91),
    -1px 0px 1px rgba(0, 0, 0, 0.47),
    0px -1px 1px rgba(0, 0, 0, 0.47),
    -1px -1px 1px rgba(0, 0, 0, 0.47),
    1px 1px 2px rgba(0, 0, 0, 0.91),
    1px 1px 3px rgba(0, 0, 0, 0.91);
}

/* -------------------------------------------------------------------------------------------------------- */
/* rainbow animation style super sexy! Il me suffit d'écraser la règle background pour les autres boutons
suivant ce que j'ai envie, et hop hop c'est hyper sexy là-bas également! */
.armg-button-rainbow {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ red 0px,
    orange,
    yellow,
    limeGreen,
    cyan,
    MediumOrchid,
    violet,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ red 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}

@keyframes rainbow-slide {
  0% {
    background-position: 0px 0px;
  }
  100% {
    /* Défilement de droite à gauche avec la même valeur que background-size (-280px 0px) ou (280px 0px) */
    background-position: -280px 0px;
  }
}
/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */
/* ici on liste les différent rainbow gradient super sexy pour chacun de nos boutons */
.armg-button-rainbow-presskit {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #edb000 0px,
    #ffc20d,
    #ffd862,
    #ffc20d,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #edb000 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-credit {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #ee51ff 0px,
    #f06fff,
    #f495ff,
    #f06fff,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #ee51ff 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-youtube {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #ff0000 0px,
    #ff3e3e,
    #ff7171,
    #ff3e3e,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #ff0000 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-twitch {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #6441a5 0px,
    #7b57bd,
    #987bcc,
    #7b57bd,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #6441a5 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-steam {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #282e39 0px,
    #4f5a71,
    #838fa9,
    #4f5a71,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #282e39 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-itchio {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #ff7d5e 0px,
    #ff7777,
    #ffac97,
    #ff7777,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #ff7d5e 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-epic-games {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #444444 0px,
    #5d5d5d,
    #777777,
    #5d5d5d,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #444444 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-switch {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #e60012 0px,
    #d70010,
    #bb000e,
    #d70010,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #e60012 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-playstation {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #0072ce 0px,
    #209bff,
    #4fafff,
    #209bff,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #0072ce 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-xbox {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #107c10 0px,
    #16ad16,
    #1cdd1c,
    #16ad16,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #107c10 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
.armg-button-rainbow-google-play-store {
  background: repeating-linear-gradient(
    135deg,
    /* Ajoutez ou supprimez autant de couleurs que vous voulez ici, sans mettre de chiffres ! */ #48ff48 0px,
    #ffd400,
    #ff3333,
    #3bccff,
    /* Répétez la première couleur à la fin avec la valeur fixe (280 * 0.7071 = 198px) */ #48ff48 198px
  );
  background-size: 280px 280px;
  animation: rainbow-slide 8s linear infinite;
}
/* -------------------------------------------------------------------------------------------------------- */

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
