<template>
  <div class="home">
    <h1>Welcome to your online photo album</h1>
    <template v-if="firstAlbum">
      <CreateAlbumPhoto  firstAlbum type="album" @clicked="newAlbumModal = true" />
      <NewAlbum v-if="newAlbumModal" @close="newAlbumModal = false" />
    </template>
    <Albums v-else />
  </div>
</template>

<script>
import CreateAlbumPhoto from '../components/CreateAlbumPhoto'
import Albums from '../components/Albums'
import NewAlbum from '../components/NewAlbum'

export default {
  name: 'Home',
  components: { CreateAlbumPhoto, Albums, NewAlbum },
  computed: {
    firstAlbum() {
      return true
    }
  },
  data() {
    return {
      newAlbumModal: false
    }
  }
}
</script>

<style>
  .home {
    width: 95%;
    min-height: calc(100vh - 55px);
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