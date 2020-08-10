<template>
  <div class="photos">
    <Photo v-for="photo in photos"
      :key="photo.id" :photo="photo"
      :selectAll="selectAll"
      @selectAllReset="$emit('selectAllReset')"  />

    <CreateAlbumPhoto v-show="!editStatus"
      type="photo" @clicked="newPhotoModal = true" />
      
    <transition name="modal">
      <NewPhoto v-if="newPhotoModal"
        @close="closeModal()" :albumId="albumId" />
    </transition>
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
  props: ['albumId', 'selectAll'],
  computed: {
    photos() {
      return this.$store.getters.getAlbums.filter(album => {
          return album.albumId == this.albumId
        })[0].photos || []
    },
    editStatus() {
      return this.$store.getters.getEditInfo.status
    }
  },
  methods: {
    closeModal() {
      this.newPhotoModal = false
    }
  }
}
</script>

<style>
  .photos {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 55px;
    justify-content: center;
  }

</style>