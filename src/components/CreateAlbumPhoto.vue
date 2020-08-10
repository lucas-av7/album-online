<template>
  <div class="createAlbum">
    <template v-if="type == 'album'">
      <div class="createAlbumPhotoFrame"
        :class="{ firstAlbum }"
        @click="$emit('clicked')">
        <i class="fas fa-book albumIcon"></i>
        <h2>New album</h2>
      </div>
      <h2 v-if="firstAlbum">Create your first album</h2>
    </template>

    <template v-if="type == 'photo'">
      <div class="createAlbumPhotoFrame"
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

  .createAlbumPhotoFrame {
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
    color: var(--primary-text-color);
  }

  .createAlbumPhotoFrame > h2 {
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

  @media screen and (min-width: 1000px) {
    .createAlbum {
      margin: 4px;
    }

    .createAlbumPhotoFrame {
      width: 150px;
      height: 150px;
    }

    .firstAlbum {
      width: 330px;
      height: 330px;
    }
  }

  @media screen and (min-width: 1400px) {
    .createAlbum {
      margin: 10px;
    }

    .createAlbumPhotoFrame {
      width: 180px;
      height: 180px;
    }

    .firstAlbum {
      width: 330px;
      height: 330px;
    }
  }
</style>