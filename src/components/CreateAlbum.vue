<template>
  <div class="createAlbum">
    <div class="createAlbumFrame" :class="{ firstAlbum }">

    </div>
    <h2 v-if="firstAlbum">Create your first album</h2>
  </div>
</template>

<script>
export default {
  name: 'CreateAlbum',
  props: {
    firstAlbum: { type: Boolean, default: false }
  }
}
</script>

<style>
  .createAlbum {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .createAlbum h2 {
    margin-top: 15px;
  }

  .createAlbumFrame {
    width: 50px;
    height: 50px;
    border: 2px solid var(--border-color);
    border-radius: 10%;
  }

  .firstAlbum {
    width: 250px;
    height: 250px;
  }
</style>