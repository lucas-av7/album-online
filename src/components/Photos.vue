<template>
  <div class="photos">
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <CreateAlbumPhoto type="photo" @clicked="newPhotoModal = true" />
    <NewPhoto v-if="newPhotoModal" @close="newPhotoModal = false" />
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
      newPhotoModal: false
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