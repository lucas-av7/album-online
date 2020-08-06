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
    },
    newPhoto(state, payload) {
      const albumId = payload.albumId
      state.albums.forEach(album => {
        if(album.albumId == albumId) {
          album.photos.push(payload)
          console.log(album)
        }
      })
    }
  },
  actions: {
    createAlbum({ commit, state }, payload) {
      payload.albumId = state.albumId++
      commit('createAlbum', payload)
    },
    newPhoto({ commit, state }, payload) {
      payload.photoId = state.photoId++
      commit('newPhoto', payload)
    }
  },
  getters: {
    getAlbums(state) {
      return state.albums
    }
  }
})
