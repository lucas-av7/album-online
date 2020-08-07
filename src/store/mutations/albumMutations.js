export default {
  createAlbum(state, payload) {
    state.albums.push(payload)
    localStorage.setItem('albumIdClickApp', JSON.stringify(state.albumId))
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  },
  deleteAlbum(state, payload) {
    state.albums.splice(payload, 1)
    localStorage.setItem('albumsClickApp', JSON.stringify(state.albums))
  }
}