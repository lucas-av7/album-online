export default {
  actions: {
    createAlbum({ commit, rootState }, payload) {
      payload.albumId = rootState.albumId++
      commit('createAlbum', payload)
    },
    deleteAlbum({ commit, getters  }, payload ) {
      const albumIndex = getters.getAlbumIndex(payload)
      commit('deleteAlbum', albumIndex)
    }
  },
  getters: {
    getAlbums(state, getters, rootState) {
      return rootState.albums
    },
    getAlbumIndex: (state, getters, rootState) => id => {
      return rootState.albums.indexOf(
        rootState.albums.filter(album => {
        return album.albumId == id
      })[0])
    }
  }
}