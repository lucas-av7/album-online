import { uploadPhoto } from '../../services/imgurService'

export default {
  actions: {
    newPhoto({ dispatch, commit, rootState }, payload) {
      rootState.globalLoading = true
      uploadPhoto(payload)
        .then(response => {
          payload.url = response.data.data.link
          payload.photoId = response.data.data.id
          delete payload.imageToUpload
          commit('newPhoto', payload)
          rootState.globalLoading = false
        })
        .catch(() => {
          rootState.globalLoading = false
          dispatch('addTextError', 'Upload failed')
        });
    },
    addComment({ commit, getters }, payload) {
      const albumIndex = getters.getAlbumIndex(payload.albumId)
      const photoIndex = getters.getPhotoIndex({ albumIndex, photoId: payload.photoId })

      commit('addComment', { albumIndex, photoIndex, comment: payload.comment })
    },
    deleteComment({ commit, getters }, payload){
      const albumIndex = getters.getAlbumIndex(payload.albumId)
      const photoIndex = getters.getPhotoIndex({ albumIndex, photoId: payload.photoId })

      commit('deleteComment', { albumIndex, photoIndex, commentIndex: payload.commentIndex })
    },
    movePhoto({ commit, getters }, payload) {
      const albumIndex = getters.getAlbumIndex(payload.albumId)
      const destinationAlbumIndex = getters.getAlbumIndex(payload.destinationAlbumId)
      const photoIndex = getters.getPhotoIndex({ albumIndex, photoId: payload.photoId })

      const moveInfo = {
        albumIndex,
        destinationAlbumIndex,
        photoIndex,
        destinationAlbumId: payload.destinationAlbumId
      }

      commit('movePhoto', moveInfo)
    },
    deletePhoto({ commit, getters }, payload ) {
      const albumIndex = getters.getAlbumIndex(payload.albumId)
      const photoIndex = getters.getPhotoIndex({ albumIndex, photoId: payload.photoId })

      const photoInfo = {
        albumIndex,
        photoIndex
      }

      commit('deletePhoto', photoInfo)
    },
    renamePhoto({ commit, getters  }, payload) {
      const albumIndex = getters.getAlbumIndex(payload.albumId)
      const photoIndex = getters.getPhotoIndex({ albumIndex, photoId: payload.photoId })
      const editInfo = {
        albumIndex,
        photoIndex,
        newTitle: payload.newTitle,
        newDescription: payload.newDescription,
        newKeywords: payload.newKeywords
      }
      commit('renamePhoto', editInfo)
    },
    favoriteToggle({ commit, getters }, payload) {
      const albumIndex = getters.getAlbumIndex(payload.albumId)
      const photoIndex = getters.getPhotoIndex({ albumIndex, photoId: payload.photoId })
      commit('favoriteToggle', { albumIndex, photoIndex })
    }
  },
  getters: {
    getPhotoIndex: (state, getters, rootState) => payload => {
      return rootState.albums[payload.albumIndex].photos.indexOf(
        rootState.albums[payload.albumIndex].photos.filter(photo => {
        return photo.photoId == payload.photoId
      })[0])
    }
  }
}