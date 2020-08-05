<template>
  <div class="albumView">
    <h1>Album name</h1>
    <MenuButton>
      <p>Edit</p>
      <p>Delete album</p>
    </MenuButton>
    <Photos />
  </div>
</template>

<script>
import Photos from '../components/Photos'
import MenuButton from '../components/UI/MenuButton'

export default {
  name: 'AlbumView',
  components: { Photos, MenuButton }
}
</script>

<style>
  .albumView {
    width: 95%;
    height: calc(100vh - 55px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  }

  .albumView h1 {
    text-align: center;
  }
</style>