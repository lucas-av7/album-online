<template>
  <div class="albums">
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <CreateAlbumPhoto type="album" />
  </div>
</template>

<script>
import Album from './Album'
import CreateAlbumPhoto from './CreateAlbumPhoto'

export default {
  name: 'Albums',
  components: { Album ,CreateAlbumPhoto }
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