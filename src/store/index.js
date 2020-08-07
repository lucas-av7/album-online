import Vue from 'vue'
import Vuex from 'vuex'

import { uploadPhoto } from '../services/imgurService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    albumId: 1,
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
      state.albums.forEach(album => {
        if(album.albumId == payload.albumId) {
          album.photos.forEach(photo => {
            if(photo.photoId == payload.photoId) {
                photo.comments.push(payload.comment)
            }
          })
        }
      })
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    },
    movePhoto(state, payload) {
      const photo = state.albums[payload.albumIndex].photos.splice(payload.photoIndex, 1)[0]
      photo.albumId = payload.destinationAlbumId
      state.albums[payload.destinationAlbumIndex].photos.push(photo)
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    },
    deleteAlbum(state, payload) {
      state.albums.splice(payload, 1)
      localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
    }
  },
  actions: {
    createAlbum({ commit, state }, payload) {
      payload.albumId = state.albumId++
      commit('createAlbum', payload)
    },
    newPhoto({ commit }, payload) {
      uploadPhoto(payload)
        .then(response => {
          payload.url = response.data.data.link
          payload.photoId = response.data.data.id
          delete payload.imageToUpload
          commit('newPhoto', payload)
        })
        .catch(error => {
          console.log(error);
        });
    },
    addComment({ commit }, payload) {
      commit('addComment', payload)
    },
    movePhoto({ commit, state }, payload) {
      const albumIndex = state.albums.indexOf(
        state.albums.filter(album => {
        return album.albumId == payload.albumId
      })[0]) 

      const destinationAlbumIndex = state.albums.indexOf(
        state.albums.filter(album => {
        return album.albumId == payload.destinationAlbumId
      })[0])
      
      const photoIndex = state.albums[albumIndex].photos.indexOf(
        state.albums[albumIndex].photos.filter(photo => {
        return photo.photoId == payload.photoId
      })[0])

      const moveInfo = {
        albumIndex,
        destinationAlbumIndex,
        photoIndex,
        destinationAlbumId: payload.destinationAlbumId
      }

      commit('movePhoto', moveInfo)
    },
    deleteAlbum({ commit, state }, payload ) {
      const albumIndex = state.albums.indexOf(
        state.albums.filter(album => {
        return album.albumId == payload
      })[0])

      commit('deleteAlbum', albumIndex)
    }
  },
  getters: {
    getAlbums(state) {
      return state.albums
    }
  }
})
