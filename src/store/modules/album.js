export default {
  actions: {
    createAlbum({ commit, rootState }, payload) {
      payload.albumId = rootState.albumId++
      commit('createAlbum', payload)
    },
    deleteAlbum({ commit, getters  }, payload ) {
      const albumIndex = getters.getAlbumIndex(payload)
      commit('deleteAlbum', albumIndex)
    },
    editAlbum({ commit, getters  }, payload ) {
      const albumIndex = getters.getAlbumIndex(payload.albumId)
      const editInfo = {
        albumIndex,
        newTitle: payload.newTitle,
        newDescription: payload.newDescription
      }
      commit('editAlbum', editInfo)
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