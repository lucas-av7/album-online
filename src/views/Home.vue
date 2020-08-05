<template>
  <div class="home">
    <h1>Welcome to your online photo album</h1>
    <CreateAlbum v-if="firstAlbum" firstAlbum />
    <Albums v-else />
  </div>
</template>

<script>
import CreateAlbum from '../components/CreateAlbum'
import Albums from '../components/Albums'

export default {
  name: 'Home',
  components: { CreateAlbum, Albums },
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