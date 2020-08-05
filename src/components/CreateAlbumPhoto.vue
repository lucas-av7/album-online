<template>
  <div class="createAlbum">
    <template v-if="type == 'album'">
      <div class="createAlbumFrame"
        :class="{ firstAlbum }"
        @click="$emit('clicked')">
        <i class="fas fa-book albumIcon"></i>
        <h2>New album</h2>
      </div>
      <h2 v-if="firstAlbum">Create your first album</h2>
    </template>

    <template v-if="type == 'photo'">
      <div class="createAlbumFrame"
        @click="$emit('clicked')">
        <i class="far fa-image albumIcon"></i>
        <h2>New photo</h2>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CreateAlbumPhoto',
  props: {
    firstAlbum: { type: Boolean, default: false },
    type: { type: String }
  }
}
</script>

<style>
  .createAlbum {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 3px;
  }

  .createAlbumFrame {
    width: 110px;
    height: 110px;
    border: 2px solid var(--border-color);
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }

  .albumIcon {
    font-size: 2.5rem;
  }

  .createAlbumFrame > h2 {
    font-size: 1.0rem;
  }

  .firstAlbum {
    width: 225px;
    height: 225px;
    margin: 70px auto;
    animation: inductionClick 10s ease infinite;
  }

  .firstAlbum > h2 {
    font-size: 1.5rem;
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