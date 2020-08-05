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

export default {
  name: 'NewAlbum',
  components: { ActionButton, Modal, Forms },
  data() {
    return {
      titleAlbum: '',
      descriptionAlbum: ''
    }
  },
  methods: {
    create() {

    }
  }
}
</script>