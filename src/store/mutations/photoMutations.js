export default {
  newPhoto(state, payload) {
    const albumId = payload.albumId
    state.albums.forEach(album => {
      if(album.albumId == albumId) {
        album.photos.push(payload)
      }
    })
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
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
  editPhoto(state, payload) {
    state.albums[payload.albumIndex].photos[payload.photoIndex].title = payload.newTitle
    state.albums[payload.albumIndex].photos[payload.photoIndex].description = payload.newDescription
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
  favoriteToggle(state, payload) {
    state.albums[payload.albumIndex].photos[payload.photoIndex].favorited
      = !state.albums[payload.albumIndex].photos[payload.photoIndex].favorited
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  }
}