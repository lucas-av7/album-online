<template>
  <div class="createAlbum">
    <div class="createAlbumFrame" :class="{ firstAlbum }">
      <i class="fas fa-book albumIcon"></i>
      <h2>New album</h2>
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

  .createAlbumFrame {
    width: 50px;
    height: 50px;
    border: 2px solid var(--border-color);
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }

  .firstAlbum {
    width: 225px;
    height: 225px;
    margin: 50px auto;
    animation: inductionClick 10s ease infinite;
  }

  .firstAlbum .albumIcon {
    font-size: 7.5rem;
  }

  @keyframes inductionClick {
    90% {
      transform: scale(1);
    }
    93% {
      transform: scale(0.95);
    }
    96% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
</style>