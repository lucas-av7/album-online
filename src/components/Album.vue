<template>
  <div class="album">
    <div class="selectBox" v-if="editStatus">
      <div class="selectBoxOverlay"
        @click="selectAlbumToggle()">
      </div>
      <input type="checkbox" v-model="selected" >
    </div>
    <router-link
      tag="button"
      :to="`/album/${album.albumId}`"
      class="linkRouter"
      :disabled="editStatus">
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
  data() {
    return {
      selected: false
    }
  },
  props: {
    album: { type: Object, required: true },
    selectAll: { type: Boolean }
  },
  computed: {
    photoUrl() {
      if(this.album.photos.length == 0) return ''
      const photo = this.album.photos[this.album.photos.length - 1]
      return photo.url.replace(photo.photoId, photo.photoId + 'm') || ''
    },
    editStatus() {
      return this.$store.getters.getEditInfo.status
    }
  },
  methods: {
    selectAlbumToggle(all) {
      if(all == 'all' && this.selected) return
      this.selected = !this.selected,
      this.$store.dispatch('selectAlbumToggle', this.album.albumId)
    }
  },
  watch: {
    editStatus() {
      this.selected = false
    },
    selected() {
      if(this.selected == false) {
        this.$emit('selectAllReset')
      }
    },
    selectAll() {
      if(this.selectAll) this.selectAlbumToggle('all')
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
    position: relative;
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

  @media screen and (min-width: 1000px) {
    .album {
      width: 150px;
      margin: 4px;
    }

    .albumFrame {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 1400px) {
    .album {
      width: 180px;
      margin: 10px;
    }

    .albumFrame {
      width: 180px;
      height: 180px;
    }
  }
</style>