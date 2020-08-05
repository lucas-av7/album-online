<template>
  <div class="albums">
    <Album v-for="i in 15" :key="i" />
    <CreateAlbumPhoto type="album" @clicked="newAlbumModal = true" />
    <NewAlbum v-if="newAlbumModal" @close="newAlbumModal = false" />
  </div>
</template>

<script>
import Album from './Album'
import CreateAlbumPhoto from './CreateAlbumPhoto'
import NewAlbum from './NewAlbum'

export default {
  name: 'Albums',
  components: { Album, CreateAlbumPhoto, NewAlbum },
  data() {
    return {
      newAlbumModal: false
    }
  }
}
</script>

<style>
  .albums {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-evenly;
    margin-bottom: 55px;
  }
</style>