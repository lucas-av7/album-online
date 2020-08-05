<template>
  <div class="home">
    <h1>Welcome to your online photo album</h1>
    <CreateAlbumPhoto v-if="firstAlbum" firstAlbum type="album" />
    <Albums v-else />
  </div>
</template>

<script>
import CreateAlbumPhoto from '../components/CreateAlbumPhoto'
import Albums from '../components/Albums'

export default {
  name: 'Home',
  components: { CreateAlbumPhoto, Albums },
  computed: {
    firstAlbum() {
      return false
    }
  }
}
</script>

<style>
  .home {
    width: 95%;
    height: calc(100vh - 55px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  }

  .home h1 {
    text-align: center;
  }
</style>