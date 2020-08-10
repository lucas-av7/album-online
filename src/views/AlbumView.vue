<template>
  <div class="albumView">
    <h1>{{ album.title }}</h1>
    <p>{{ album.description }}</p>

    <transition name="menuChange" mode="out-in">
    <MenuButton key="menu1" v-if="!editInfo.status">
      <h3>Album menu</h3>
      <hr>
      <p v-if="album.photos.length > 0" @click="edit()">Edit</p>
      <p @click="renameAlbumModal = true, retrieveInfo()">Rename</p>
      <p @click="deleteAlbumModal = true">Delete</p>
    </MenuButton>
    <MenuButton key="menu2" v-else>
      <h3>Selected photos</h3>
      <hr>
      <p v-if="editInfo.selectedPhotos.length > 0"
        @click="deleteSelectedPhotosModal = true">Delete</p>
      <p @click="edit()">Cancel</p>
    </MenuButton>
    </transition>

    <Photos v-if="albumIndex != -1" :albumId="id" />

    <transition name="modal">
      <Modal v-if="renameAlbumModal"
        @clicked="renameAlbumModal = false">
        <h1>Rename album</h1>
        <Forms>
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Album title"
            v-model="editTitleText"
            maxlength="25">

          <label for="description">Description</label>
          <input 
            type="text"
            name="description"
            placeholder="Album description"
            v-model="editDescriptionText"
            maxlength="50">
        </Forms>
        <template slot="buttonsArea">
        <ActionButton
          @clicked="renameAlbumModal = false"
          text="Cancel"
          type="secondary" />
        <ActionButton
          text="Save"
          type="primary"
          @clicked="renameAlbum()"  />
        </template>
      </Modal>

      <Modal v-if="deleteAlbumModal"
        @clicked="deleteAlbumModal = false">
        <h1>Delete album?</h1>
        <template slot="buttonsArea">
        <ActionButton
          @clicked="deleteAlbumModal = false"
          text="Cancel"
          type="secondary" />
        <ActionButton
          text="Delete"
          type="danger"
          @clicked="deleteAlbum()"  />
        </template>
      </Modal>

      <Modal v-if="deleteSelectedPhotosModal"
        @clicked="deleteSelectedPhotosModal = false">
        <h1>Delete photo{{ editInfo.selectedPhotos.length > 1 ? 's' : '' }}?</h1>
        <template slot="buttonsArea">
        <ActionButton
          @clicked="deleteSelectedPhotosModal = false"
          text="Cancel"
          type="secondary" />
        <ActionButton
          text="Delete"
          type="danger"
          @clicked="deleteSelectedPhotos()"  />
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import Photos from '../components/Photos'
import MenuButton from '../components/UI/MenuButton'
import Modal from '../components/UI/Modal'
import ActionButton from '../components/UI/ActionButton'
import Forms from '../components/UI/Forms'
import regexMixin from '../mixin/regexMixin'

export default {
  name: 'AlbumView',
  components: { Photos, MenuButton, Modal, ActionButton, Forms },
  mixins: [regexMixin],
  data() {
    return {
      renameAlbumModal: false,
      deleteAlbumModal: false,
      deleteSelectedPhotosModal: false,
      editTitleText: '',
      editDescriptionText: '',
      albumIndex: null
    }
  },
  props: ['id'],
  watch: {
    editTitleText() {
      this.editTitleText = this.removeSpecialCharacters(this.editTitleText)
    },
    editDescriptionText() {
      this.editDescriptionText = this.removeSpecialCharacters(this.editDescriptionText)
    }
  },
  computed: {
    album() {
      return this.$store.getters.getAlbums.filter(album => {
        return album.albumId == this.id
      })[0] || []
    },
    editInfo() {
      return this.$store.getters.getEditInfo
    }
  },
  created() {
    this.albumIndex = this.$store.getters.getAlbumIndex(this.id)
    if(this.albumIndex == -1){
      this.$router.push('/') 
    }
  },
  methods: {
    deleteAlbum() {
      this.$store.dispatch('deleteAlbum', this.id)
      this.$router.push('/')
    },
    retrieveInfo() {
      this.editTitleText = this.album.title
      this.editDescriptionText = this.album.description
    },
    renameAlbum() {
      this.editTitleText = this.editTitleText.trim()
      this.editDescriptionText = this.editDescriptionText.trim()

      if(this.editTitleText == '' || (this.editTitleText == this.album.title
        && this.editDescriptionText == this.album.description)) {
        this.renameAlbumModal = false
      } else {
        const editInfo = {
          albumId: this.id,
          newTitle: this.editTitleText,
          newDescription: this.editDescriptionText
        }
        this.$store.dispatch('renameAlbum', editInfo)
        this.renameAlbumModal = false
      }
    },
    edit() {
      this.$store.dispatch('editStatusToggle')
    },
    deleteSelectedPhotos() {
      this.$store.dispatch('deleteSelectedPhotos', this.id)
      this.deleteSelectedPhotosModal = false
    }
  }
}
</script>

<style>
  .albumView {
    width: 100%;
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

  .menuChange-enter-active {
    animation: 0.1s menuIn linear;
  }

  .menuChange-leave-active {
    animation: 0.1s menuOut linear;
  }

  @keyframes menuIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes menuOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
</style>