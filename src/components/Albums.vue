<template>
  <div class="albums">
    <Album v-for="album in allAlbums"
      :key="album.albumId"
      :album="album"
      :selectAll="selectAll"
      @selectAllReset="$emit('selectAllReset')"  />

    <CreateAlbumPhoto v-show="!editStatus"
      type="album" @clicked="newAlbumModal = true" />

    <transition name="modal">
      <NewAlbum v-if="newAlbumModal" @close="closeModal()" />
    </transition>
  </div>
</template>

<script>
import Album from './Album'
import CreateAlbumPhoto from './CreateAlbumPhoto'
import NewAlbum from './NewAlbum'

export default {
  name: 'Albums',
  props: ['selectAll'],
  components: { Album, CreateAlbumPhoto, NewAlbum },
  data() {
    return {
      newAlbumModal: false
    }
  },
  computed: {
    allAlbums() {
      return this.$store.getters.getAlbums
    },
    editStatus() {
      return this.$store.getters.getEditInfo.status
    }
  },
  methods: {
    closeModal() {
      this.newAlbumModal = false
    }
  }
}
</script>

<style>
  .albums {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 55px;
    justify-content: center;
  }
</style>