<template>
  <div class="photo">
    <div class="selectBox" v-if="editStatus">
      <div class="selectBoxOverlay"
        @click="selectPhotoToggle()">
      </div>
      <input type="checkbox" v-model="selected" >
    </div>
    <router-link
      tag="button"
      :to="`/photo/${photo.albumId}/${photo.photoId}`" 
      class="linkRouter"
      :disabled="editStatus">
      <div class="photoFrame" :class="{ selectedPhoto: selected }">
        <img :src="photoUrl" :alt="photo.title">
      </div>
    </router-link>
    <p>{{ photo.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  data() {
    return {
      selected: false
    }
  },
  props: {
    photo: { type: Object, required: true },
    selectAll: { type: Boolean }
  },
  computed: {
    photoUrl() {
      return this.photo.url.replace(this.photo.photoId, this.photo.photoId + 'm')
    },
    editStatus() {
      return this.$store.getters.getEditInfo.status
    }
  },
  methods: {
    selectPhotoToggle(all) {
      if(all == 'all' && this.selected) return
      this.selected = !this.selected,
      this.$store.dispatch('selectPhotoToggle', this.photo.photoId)
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
      if(this.selectAll) this.selectPhotoToggle('all')
    }
  }
}
</script>

<style>
  .photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 3px;
    width: 110px;
    position: relative;
  }

  .photo > p {
    font-size: 1.0rem;
    text-align: center;
    width: 100%;
    height: 20px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .selectBox {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .selectBoxOverlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

    .selectBox input[type=checkbox] {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 25px;
    height: 25px;
    z-index: 1;
  }

  button.linkRouter {
    border: none;
    outline: none;
    background: transparent;
  }

  .photoFrame {
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

  .photoFrame img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .selectedPhoto {
    border: 5px solid var(--primary-color);
  }

  @media screen and (min-width: 1000px) {
    .photo {
      width: 150px;
      margin: 4px;
    }

    .photoFrame {
      width: 150px;
      height: 150px;
    }

    .photo input[type=checkbox],
    .album input[type=checkbox] {
      width: 35px;
      height: 35px;
    }
  }

  @media screen and (min-width: 1400px) {
    .photo {
      width: 180px;
      margin: 10px;
    }

    .photoFrame {
      width: 180px;
      height: 180px;
    }
  }
</style>