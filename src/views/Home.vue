<template>
  <div class="home">
    <h1>Welcome to your online photo album</h1>
    <template v-if="allAlbums.length == 0">
      <CreateAlbumPhoto  firstAlbum type="album" @clicked="newAlbumModal = true" />
      <transition name="modal">
        <NewAlbum v-if="newAlbumModal" @close="closeModal()" />
      </transition>
    </template>

    <template v-else>
      <transition name="opacityAnimation" mode="out-in">
        <MenuButton v-if="!editInfo.status">
          <h3>Home menu</h3>
          <hr>
          <p @click="edit(true)">Edit</p>
        </MenuButton>
        <MenuButton key="menu2" v-else>
          <h3>Selected albums</h3>
          <hr>
          <p v-if="editInfo.selectedAlbums.length < allAlbums.length"
            @click="selectAll = true">
            Select all
          </p>
          <template v-if="editInfo.selectedAlbums.length > 0">
            <p @click="deleteSelectedAlbumsModal = true">Delete</p>
          </template>
          <p @click="edit(false)">Cancel</p>
        </MenuButton>
      </transition>

      <Albums :selectAll="selectAll"
        @selectAllReset="selectAll = false" />
    </template>

    <transition name="modal">
      <Modal v-if="deleteSelectedAlbumsModal"
        @clicked="deleteSelectedAlbumsModal = false">
        <h1>Delete {{ editInfo.selectedAlbums.length }} album{{ editInfo.selectedAlbums.length > 1 ? 's' : '' }}?</h1>
        <template slot="buttonsArea">
        <ActionButton
          @clicked="deleteSelectedAlbumsModal = false"
          text="Cancel"
          type="secondary" />
        <ActionButton
          text="Delete"
          type="danger"
          @clicked="deleteSelectedAlbums()"  />
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import CreateAlbumPhoto from '../components/CreateAlbumPhoto'
import Albums from '../components/Albums'
import NewAlbum from '../components/NewAlbum'
import MenuButton from '../components/UI/MenuButton'
import Modal from '../components/UI/Modal'
import ActionButton from '../components/UI/ActionButton'

export default {
  name: 'Home',
  components: { CreateAlbumPhoto, Albums, NewAlbum, MenuButton, Modal, ActionButton },
  computed: {
    allAlbums() {
      return this.$store.getters.getAlbums
    },
    editInfo() {
      return this.$store.getters.getEditInfo
    }
  },
  data() {
    return {
      newAlbumModal: false,
      selectAll: false,
      deleteSelectedAlbumsModal: false
    }
  },
  methods: {
    closeModal() {
      this.newAlbumModal = false
    },
    edit(status) {
      this.$store.dispatch('editStatusToggle', status)
      this.selectAll = false
    },
    deleteSelectedAlbums() {
      this.$store.dispatch('deleteSelectedAlbums', this.id)
      this.deleteSelectedAlbumsModal = false
    }
  },
  beforeDestroy() {
    this.edit(false)
  }
}
</script>

<style>
  .home {
    width: 100%;
    min-height: calc(100vh - 55px);
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