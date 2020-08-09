import Vue from 'vue'
import Vuex from 'vuex'

import album from './modules/album'
import photo from './modules/photo'

import albumMutations from './mutations/albumMutations'
import photoMutations from './mutations/photoMutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    albumId: 1,
    globalLoading: false,
    globalError: ''
  },
  modules: {
    album,
    photo
  },
  mutations: {
    ...albumMutations,
    ...photoMutations,
    loadLocalStorage(state) {
      if (localStorage.getItem('albumsClickApp') 
        && localStorage.getItem('albumIdClickApp')) {
        state.albums = JSON.parse(localStorage.getItem('albumsClickApp'));
        state.albumId = JSON.parse(localStorage.getItem('albumIdClickApp'));
      }
    }
  },
  getters: {
    globalLoading(state) {
      return state.globalLoading
    },
    globalError(state) {
      return state.globalError
    }
  },
  actions: {
    addTextError({ state }, payload) {
      state.globalError = payload
    }
  }
})
