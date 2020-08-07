import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import FormData from 'form-data'

let data = new FormData()
let config = {
  method: 'post',
  url: 'https://api.imgur.com/3/image',
  headers: { 
    'Authorization': 'Client-ID 6f6d5293fd45be2', 
  },
  data : data
};

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
      if (localStorage.getItem('albumsClickApp') && localStorage.getItem('albumIdClickApp')) {
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
    }
  },
  actions: {
    createAlbum({ commit, state }, payload) {
      payload.albumId = state.albumId++
      commit('createAlbum', payload)
    },
    newPhoto({ commit }, payload) {
      data.append('image', payload.imageToUpload)
      axios(config)
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
    }
  },
  getters: {
    getAlbums(state) {
      return state.albums
    }
  }
})
