<template>
  <Modal @clicked="$emit('close')">
    <h1>New album</h1>
    <Forms>
      <label for="title">Title</label>
      <input type="text" name="title"
      placeholder="Album title"
      v-model="titleAlbum">

      <label for="description">Description</label>
      <input type="text" name="description"
      placeholder="Album description"
      v-model="descriptionAlbum">
    </Forms>
    <div v-show="error" class="errosInput">
      <p>{{ error }}</p>
    </div>
    <template slot="buttonsArea">
      <ActionButton
        @clicked="$emit('close')"
        text="Cancel"
        option="closeModal"
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
      titleAlbum: '',
      descriptionAlbum: '',
      error: ''
    }
  },
  watch: {
    titleAlbum() {
      this.titleAlbum = this.removeSpecialCharacters(this.titleAlbum)
    },
    descriptionAlbum() {
      this.descriptionAlbum = this.removeSpecialCharacters(this.descriptionAlbum)
    }
  },
  methods: {
    create() {
      const allowCreate = this.checkErros()
      if(allowCreate) {
        const newAlbum = {
          title: this.titleAlbum.trim(),
          description: this.descriptionAlbum.trim(),
          photos: []
        }
        this.$store.dispatch('createAlbum', newAlbum)
        this.$emit('close')
      }
    },
    checkErros() {
      if(this.titleAlbum == '') {
        this.error = 'Error: Title is blank'
        return false
      } else if (this.descriptionAlbum == '') {
        this.error = 'Error: Description is blank'
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