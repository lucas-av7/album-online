export default {
  createAlbum(state, payload) {
    state.albums.push(payload)
    localStorage.setItem('albumIdClickApp', JSON.stringify(state.albumId))
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
  deleteAlbum(state, payload) {
    state.albums.splice(payload, 1)
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
  renameAlbum(state, payload) {
    state.albums[payload.albumIndex].title = payload.newTitle
    state.albums[payload.albumIndex].description = payload.newDescription
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
}