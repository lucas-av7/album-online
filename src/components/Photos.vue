<template>
  <div class="photos">
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <CreateAlbumPhoto type="photo" />
  </div>
</template>

<script>
import Photo from './Photo'
import CreateAlbumPhoto from './CreateAlbumPhoto'

export default {
  name: 'Photos',
  components: { Photo, CreateAlbumPhoto }
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