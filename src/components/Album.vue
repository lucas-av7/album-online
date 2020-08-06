<template>
  <div class="album">
    <router-link :to="`/album/${album.albumId}`" class="linkRouter">
      <div class="albumFrame">
        <i v-if="photoUrl == ''" class="far fa-folder-open albumIcon"></i>
        <img v-else :src="photoUrl" :alt="album.title">
      </div>
    </router-link>
    <p>{{ album.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    album: { type: Object, required: true }
  },
  computed: {
    photoUrl() {
      if(this.album.photos.length == 0) return ''
      const foto = this.album.photos[this.album.photos.length - 1]
      return foto.url.replace(foto.photoId, foto.photoId + 'm') || ''
    }
  }
}
</script>

<style>
  .album {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 3px;
    width: 110px;
  }

  .album > p {
    font-size: 1.0rem;
    text-align: center;
    width: 100%;
    height: 20px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .albumFrame {
    width: 110px;
    height: 110px;
    border: 2px solid var(--border-color);
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    overflow: hidden;
  }

  .albumFrame img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

</style>