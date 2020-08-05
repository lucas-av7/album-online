<template>
  <div class="albums">
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <CreateAlbum />
  </div>
</template>

<script>
import Album from './Album'
import CreateAlbum from './CreateAlbum'

export default {
  name: 'Albums',
  components: { Album ,CreateAlbum }
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