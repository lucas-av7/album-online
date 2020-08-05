<template>
  <Modal @clicked="$emit('close')">
    <h1>New album</h1>
    <Forms>
      <label for="title">Title</label>
      <input type="text" name="title" placeholder="Album title">

      <label for="description">Description</label>
      <input type="text" name="description" placeholder="Album description">
    </Forms>
    <template slot="buttonsArea">
      <ActionButton
        @clicked="$emit('close')"
        text="Cancel"
        type="secondary" />
      <ActionButton
        text="Upload"
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
  components: { ActionButton, Modal, Forms }
}
</script>