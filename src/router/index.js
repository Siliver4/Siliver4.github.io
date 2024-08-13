import { createRouter, createWebHistory } from 'vue-router'
import { routes, base } from '@/config'
import * as pages from '@/components/pages'

export default createRouter({
  history: createWebHistory(base),
  routes: [
    { name: 'bookHomepage', path: routes.bookHomepage, component: pages.bookHomepage },
    { name: 'bookDetail', path: routes.bookDetail, component: pages.bookDetail },

    { name: 'rokhTempleHomepage', path: routes.rokhTempleHomepage, component: pages.rokhTempleHomepage },
    { name: 'youtubeWatcher', path: routes.youtubeWatcher, component: pages.youtubeWatcher },
    { name: 'rokhMusicPlaylist', path: routes.rokhMusicPlaylist, component: pages.rokhMusicPlaylist },
    { name: 'nothing', path: routes.nothing, component: pages.nothing }
  ]
})

//export default router
