import Vue from 'vue'
import Vuex from 'vuex'

import album from './modules/album'
import photo from './modules/photo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    albumId: 1,
  },
  modules: {
    album,
    photo
  },
  mutations: {
    createAlbum(state, payload) {
      state.albums.push(payload)
      localStorage.setItem('albumIdClickApp', JSON.stringify(state.albumId))
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    },
    newPhoto(state, payload) {
      const albumId = payload.albumId
      state.albums.forEach(album => {
        if(album.albumId == albumId) {
          album.photos.push(payload)
        }
      })
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    },
    loadLocalStorage(state) {
      if (localStorage.getItem('albumsClickApp') 
        && localStorage.getItem('albumIdClickApp')) {
        state.albums = JSON.parse(localStorage.getItem('albumsClickApp'));
        state.albumId = JSON.parse(localStorage.getItem('albumIdClickApp'));
      }
    },
    addComment(state, payload) {
      state.albums[payload.albumIndex].photos[payload.photoIndex]
        .comments.push(payload.comment)
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    },
    movePhoto(state, payload) {
      const photo = state.albums[payload.albumIndex].photos.splice(payload.photoIndex, 1)[0]
      photo.albumId = payload.destinationAlbumId
      state.albums[payload.destinationAlbumIndex].photos.push(photo)
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    },
    deletePhoto(state, payload) {
      state.albums[payload.albumIndex].photos.splice(payload.photoIndex, 1)
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    },
    deleteAlbum(state, payload) {
      state.albums.splice(payload, 1)
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    }
  },
  actions: {
  },
  getters: {
  }
})
