<template>
  <div class="albumView">
    <h1>{{ album.title }}</h1>
    <p>{{ album.description }}</p>
    <MenuButton>
      <p @click="editAlbumModal = true">Edit</p>
      <p @click="deleteAlbumModal = true">Delete album</p>
    </MenuButton>

    <Photos :albumId="id" />

    <Modal v-if="editAlbumModal" @clicked="editAlbumModal = false">
      <h1>Edit album</h1>
      <Forms>
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Album title">

        <label for="description">Description</label>
        <input type="text" name="description" placeholder="Album description">
      </Forms>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="editAlbumModal = false"
        text="Cancel"
        type="secondary" />
      <ActionButton
        text="Save"
        type="primary" />
      </template>
    </Modal>

    <Modal v-if="deleteAlbumModal" @clicked="deleteAlbumModal = false">
      <h1>Delete album?</h1>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="deleteAlbumModal = false"
        text="Cancel"
        type="secondary" />
      <ActionButton
        text="Delete"
        type="danger" />
      </template>
    </Modal>
  </div>
</template>

<script>
import Photos from '../components/Photos'
import MenuButton from '../components/UI/MenuButton'
import Modal from '../components/UI/Modal'
import ActionButton from '../components/UI/ActionButton'
import Forms from '../components/UI/Forms'

export default {
  name: 'AlbumView',
  components: { Photos, MenuButton, Modal, ActionButton, Forms },
  data() {
    return {
      editAlbumModal: false,
      deleteAlbumModal: false
    }
  },
  props: ['id'],
  computed: {
    album() {
      return this.$store.getters.getAlbums.filter(album => {
        return album.albumId == this.id
      })[0] || []
    }
  },
  created() {
    if(this.album.length == 0) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .albumView {
    width: 95%;
    min-height: calc(100vh - 55px);
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