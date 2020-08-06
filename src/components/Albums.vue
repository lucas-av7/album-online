<template>
  <div class="albums">
    <Album v-for="album in allAlbums"
      :key="album.albumId"
      :album="album"/>
    <CreateAlbumPhoto type="album" @clicked="newAlbumModal = true" />
    <NewAlbum v-if="newAlbumModal" @close="closeModal()" />
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
  },
  computed: {
    allAlbums() {
      return this.$store.getters.getAlbums
    }
  },
  methods: {
    closeModal() {
      this.newAlbumModal = false
      document.body.style.overflow = 'initial'
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
  }
</style>