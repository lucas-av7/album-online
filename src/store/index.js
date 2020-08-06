import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    albumId: 1,
    photoId: 1
  },
  mutations: {
    createAlbum(state, payload) {
      state.albums.push(payload)
    }
  },
  actions: {
    createAlbum({ commit, state }, payload) {
      payload.albumId = state.albumId++
      commit('createAlbum', payload)
    },
  },
  getters: {
    getAlbums(state) {
      return state.albums
    },
    titleDuplicateCheck: (state) => (payload) => {
      const duplicate = state.albums.filter(album => {
        return album.title === payload
      })
      return duplicate.length == 0 ? false : true
    }
  }
})
