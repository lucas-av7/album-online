<template>
  <div class="home">
    <h1>Welcome to your online photo album</h1>
    <CreateAlbum firstAlbum />
  </div>
</template>

<script>
import CreateAlbum from '../components/CreateAlbum'

export default {
  name: 'Home',
  components: { CreateAlbum }
}
</script>

<style>
  .home {
    width: 90%;
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