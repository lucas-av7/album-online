<template>
  <div class="albumView">
    <h1>{{ album.title }}</h1>
    <p>{{ album.description }}</p>
    <MenuButton>
      <p @click="editAlbumModal = true, retrieveInfo()">Edit</p>
      <p @click="deleteAlbumModal = true">Delete album</p>
    </MenuButton>

    <Photos v-if="albumIndex != -1" :albumId="id" />

    <Modal v-if="editAlbumModal" @clicked="editAlbumModal = false">
      <h1>Edit album</h1>
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
        @clicked="editAlbumModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        text="Save"
        type="primary"
        @clicked="editAlbum()"  />
      </template>
    </Modal>

    <Modal v-if="deleteAlbumModal" @clicked="deleteAlbumModal = false">
      <h1>Delete album?</h1>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="deleteAlbumModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        text="Delete"
        type="danger"
        @clicked="deleteAlbum()"  />
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
import regexMixin from '../mixin/regexMixin'

export default {
  name: 'AlbumView',
  components: { Photos, MenuButton, Modal, ActionButton, Forms },
  mixins: [regexMixin],
  data() {
    return {
      editAlbumModal: false,
      deleteAlbumModal: false,
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
      document.body.style.overflow = 'initial'
      this.$router.push('/')
    },
    retrieveInfo() {
      this.editTitleText = this.album.title
      this.editDescriptionText = this.album.description
    },
    editAlbum() {
      this.editTitleText = this.editTitleText.trim()
      this.editDescriptionText = this.editDescriptionText.trim()

      if((this.editTitleText == '' || this.editDescriptionText == '')
        || (this.editTitleText == this.album.title && this.editDescriptionText == this.album.description)) {
        document.body.style.overflow = 'initial'
        this.editAlbumModal = false
      } else {
        const editInfo = {
          albumId: this.id,
          newTitle: this.editTitleText,
          newDescription: this.editDescriptionText
        }
        this.$store.dispatch('editAlbum', editInfo)
        document.body.style.overflow = 'initial'
        this.editAlbumModal = false
      }
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