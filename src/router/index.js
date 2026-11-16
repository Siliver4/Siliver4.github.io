import { createRouter, createWebHistory } from 'vue-router'
import { routes, base } from '@/config'
import * as pages from '@/components/pages'

export default createRouter({
  history: createWebHistory(base),
  routes: [
    // ======= Alexandre 'Rokh' Mailliu Games : ============================================ //
    {
      name: 'alexandreRokhMailliuGamesHomepageAboutMe',
      path: routes.alexandreRokhMailliuGamesHomepageAboutMe,
      component: pages.alexandreRokhMailliuGamesHomepageAboutMe,
      meta: { title: "Alexandre 'Rokh' Mailliu Games - About Me" }
    },
    {
      name: 'alexandreRokhMailliuGamesHomepageMyGames',
      path: routes.alexandreRokhMailliuGamesHomepageMyGames,
      component: pages.alexandreRokhMailliuGamesHomepageMyGames,
      meta: { title: "Alexandre 'Rokh' Mailliu Games - My Games" }
    },
    {
      name: 'alexandreRokhMailliuGamesHomepageFollowMe',
      path: routes.alexandreRokhMailliuGamesHomepageFollowMe,
      component: pages.alexandreRokhMailliuGamesHomepageFollowMe,
      meta: { title: "Alexandre 'Rokh' Mailliu Games - Follow Me" }
    },
    {
      name: 'alexandreRokhMailliuGamesHomepageContactMe',
      path: routes.alexandreRokhMailliuGamesHomepageContactMe,
      component: pages.alexandreRokhMailliuGamesHomepageContactMe,
      meta: { title: "Alexandre 'Rokh' Mailliu Games - Contact Me" }
    },
    //// ---------------------------------------------------------------------------------------- //
    //// Google Play Store Privacy Policy :
    //// /!\ malheureusement Google Play m'oblige à ajouter une page spécifique pour chacun de mes
    //// jeux qui sera release sur leur platforme. Cette page doit être accessible à partir d'une
    //// url unique, de n'importe où dans le monde sans restriction, et doit contenir les règles
    //// de confidentialitées lié à une application à la fois. Je vais donc être obligé de. Mais
    //// l'avantage dans mon cas, c'est que comme je n'utilise aucunes données perso des joueurs,
    //// ni ne les fait payer quoi que ce soit une fois la license du jeu acheté sur Google Play,
    //// ni ne les obliges à visionner des publicilité, ni rien du tout. Bref. Je fais des jeux
    //// simple, mais complet, qu'on achète en une seule fois, on y joue autant qu'on peut. Si
    //// possible je vais essayer de mettre l'équivalent du Steam Cloud, pour Android, si c'est
    //// pas trop le bordel avec toute leur documention maze machin, et un jour si j'ai assez de
    //// succès sur mes jeux Android, je verrais pour faire une version Android / Google Play de
    //// mon système de Steam Achievement & de Steam Leaderboards, car j'ai vu que ça existait.
    {
      name: 'alexandreRokhMailliuGamesHomepageGooglePlayStorePrivacyPolicyMyGamesItsChoppingTime',
      path: routes.alexandreRokhMailliuGamesHomepageGooglePlayStorePrivacyPolicyMyGamesItsChoppingTime,
      component: pages.alexandreRokhMailliuGamesHomepageGooglePlayStorePrivacyPolicyMyGamesItsChoppingTime,
      meta: { title: "Alexandre 'Rokh' Mailliu Games - My Games - It's Chopping Time! - Google Play Store Privacy Policy" }
    },
    //// ---------------------------------------------------------------------------------------- //
    // ======= Alexandre 'Rokh' Mailliu Games : ============================================ //

    // ======= family-showcase : =========================================================== //
    { name: 'bookHomepage', path: routes.bookHomepage, component: pages.bookHomepage, meta: { title: 'Rokh Family Showcase' } },
    { name: 'bookDetail', path: routes.bookDetail, component: pages.bookDetail, meta: { title: 'Rokh Family Showcase: Book Detail Page' } },
    // ======= family-showcase : =========================================================== //

    // ======= rokh-temple : =============================================================== //
    { name: 'rokhTempleHomepage', path: routes.rokhTempleHomepage, component: pages.rokhTempleHomepage, meta: { title: 'Rokh Temple' } },
    { name: 'youtubeWatcher', path: routes.youtubeWatcher, component: pages.youtubeWatcher, meta: { title: 'Rokh Temple: youtube-watcher page' } },
    { name: 'rokhMusicPlaylist', path: routes.rokhMusicPlaylist, component: pages.rokhMusicPlaylist },
    // ======= rokh-temple : =============================================================== //

    // ======= others : ==================================================================== //
    // nothing page route for pages not found error.
    { name: 'nothing', path: routes.nothing, component: pages.nothing },

    // default route that redirect on 'alexandreRokhMailliuGamesHomepageMyGames'.
    { name: 'default', path: '/', redirect: { name: 'alexandreRokhMailliuGamesHomepageMyGames' } },
    // Default route lead towards 'My Games'.
    { name: 'default2', path: routes.alexandreRokhMailliuGames1, redirect: { name: 'alexandreRokhMailliuGamesHomepageMyGames' } },
    { name: 'default3', path: routes.alexandreRokhMailliuGames2, redirect: { name: 'alexandreRokhMailliuGamesHomepageMyGames' } },

    // route to capture all non defined routes.
    { path: '/:catchAll(.*)', redirect: { name: 'nothing' } }
    // ======= others : ==================================================================== //
  ]
})

//export default router
