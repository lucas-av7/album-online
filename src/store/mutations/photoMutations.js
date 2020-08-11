export default {
  newPhoto(state, payload) {
    state.albums[payload.albumIndex].photos.push(payload.photo)
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
  addComment(state, payload) {
    state.albums[payload.albumIndex].photos[payload.photoIndex]
      .comments.push(payload.comment)
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
  deleteComment(state, payload) {
    state.albums[payload.albumIndex].photos[payload.photoIndex].comments.splice(payload.commentIndex, 1)
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
  renamePhoto(state, payload) {
    const photo = state.albums[payload.albumIndex].photos[payload.photoIndex]
    photo.title = payload.newTitle
    photo.description = payload.newDescription
    photo.keywords = payload.newKeywords
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
  favoriteToggle(state, payload) {
    const photo = state.albums[payload.albumIndex].photos[payload.photoIndex]
    photo.favorited = !photo.favorited
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  }
}