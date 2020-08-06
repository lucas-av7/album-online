<template>
  <div class="photos">
    <Photo v-for="photo in photos" :key="photo.id" :photo="photo" />
    <CreateAlbumPhoto type="photo" @clicked="newPhotoModal = true" />
    <NewPhoto v-if="newPhotoModal" @close="closeModal()" :albumId="albumId" />
  </div>
</template>

<script>
import Photo from './Photo'
import CreateAlbumPhoto from './CreateAlbumPhoto'
import NewPhoto from './NewPhoto'

export default {
  name: 'Photos',
  components: { Photo, CreateAlbumPhoto, NewPhoto },
  data() {
    return {
      newPhotoModal: false,
    }
  },
  props: ['albumId'],
  computed: {
    photos() {
      return this.$store.getters.getAlbums.filter(album => {
          return album.albumId == this.albumId
        })[0].photos || []
    }
  },
  methods: {
    closeModal() {
      this.newPhotoModal = false
      document.body.style.overflow = 'initial'
    }
  }
}
</script>

<style>
  .photos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-evenly;
  }
</style>