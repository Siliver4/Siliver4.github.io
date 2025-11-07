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
