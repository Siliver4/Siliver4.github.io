import { createRouter, createWebHistory } from 'vue-router'
import { routes, base } from '@/config'
import * as pages from '@/components/pages'

export default createRouter({
  history: createWebHistory(base),
  routes: [
    { name: 'bookHomepage', path: routes.bookHomepage, component: pages.bookHomepage, meta: { title: 'Rokh Family Showcase' } },
    { name: 'bookDetail', path: routes.bookDetail, component: pages.bookDetail, meta: { title: 'Rokh Family Showcase: Book Detail Page' } },

    { name: 'rokhTempleHomepage', path: routes.rokhTempleHomepage, component: pages.rokhTempleHomepage, meta: { title: 'Rokh Temple' } },
    { name: 'youtubeWatcher', path: routes.youtubeWatcher, component: pages.youtubeWatcher, meta: { title: 'Rokh Temple: youtube-watcher page' } },
    { name: 'rokhMusicPlaylist', path: routes.rokhMusicPlaylist, component: pages.rokhMusicPlaylist },

    // nothing page route for pages not found error.
    { name: 'nothing', path: routes.nothing, component: pages.nothing },

    // default route that redirect on 'bookHomepage'.
    { name: 'default', path: '/', redirect: { name: 'bookHomepage' } },

    // route to capture all non defined routes.
    { path: '/:catchAll(.*)', redirect: { name: 'nothing' } }
  ]
})

//export default router
