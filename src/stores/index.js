import { defineStore } from 'pinia'

export const commonStore = defineStore('commonStore', {
  state: () => {
    return {
      loading: false
    }
  },
  actions: {
    setLoading(loading) {
      this.loading = loading
    }
  },
  persist: {
    enabled: true
    /*strategies: [
      {storage: sessionStorage, paths: ['']},
    ],*/
  }
})
