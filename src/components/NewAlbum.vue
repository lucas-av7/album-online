<template>
  <Modal @clicked="$emit('close')">
    <h1>New album</h1>
    <Forms>
      <label for="title">Title</label>
      <input type="text" name="title"
      placeholder="Album title"
      v-model="albumTitle">

      <label for="description">Description</label>
      <input type="text" name="description"
      placeholder="Album description"
      v-model="albumDescription">
    </Forms>
    <div v-show="error" class="errosInput">
      <p>{{ error }}</p>
    </div>
    <template slot="buttonsArea">
      <ActionButton
        @clicked="$emit('close')"
        text="Cancel"
        type="secondary" />
      <ActionButton
        @clicked="create()"
        text="Create"
        type="primary" />
    </template>
  </Modal>
</template>

<script>
import ActionButton from './UI/ActionButton'
import Modal from './UI/Modal'
import Forms from './UI/Forms'
import regexMixin from '../mixin/regexMixin'

export default {
  name: 'NewAlbum',
  mixins: [regexMixin],
  components: { ActionButton, Modal, Forms },
  data() {
    return {
      albumTitle: '',
      albumDescription: '',
      error: ''
    }
  },
  watch: {
    albumTitle() {
      this.albumTitle = this.removeSpecialCharacters(this.albumTitle)
    },
    albumDescription() {
      this.albumDescription = this.removeSpecialCharacters(this.albumDescription)
    }
  },
  methods: {
    create() {
      const allowCreate = this.checkErros()
      if(allowCreate) {
        const newAlbum = {
          title: this.albumTitle.trim(),
          description: this.albumDescription.trim(),
          photos: []
        }
        this.$store.dispatch('createAlbum', newAlbum)
        this.$emit('close')
      }
    },
    checkErros() {
      if(this.albumTitle == '') {
        this.error = 'Error: Title is blank'
        return false
      } else if (this.albumDescription == '') {
        this.error = 'Error: Description is blank'
        return false
      }

      // Checks if the title is already in use
      const albums = this.$store.getters.getAlbums
      const titleDuplicate = albums.filter(album => {
        return album.title == this.albumTitle
      }).length > 0

      if(titleDuplicate) {
        this.error = 'Error: Title is already used'
        return false
      } else {
        this.error = ''
        return true
      }

    }
  }
}
</script>

<style>
  .errosInput p {
    color: var(--danger);
  }
</style>