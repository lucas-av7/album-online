<template>
  <Modal @clicked="$emit('close')">
    <h1>New album</h1>
    <div class="newAlbumDataForm">
      <label for="title">Title</label>
      <input type="text" name="title" placeholder="Album title">

      <label for="description">Description</label>
      <input type="text" name="description" placeholder="Album description">
    </div>
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

export default {
  name: 'NewAlbum',
  components: { ActionButton, Modal }
}
</script>

<style>
  .newAlbumDataForm {
    display: flex;
    width: 95%;
    flex-direction: column;
    color: var(--secondary-text-color);
  }

  .newAlbumDataForm input {
    border: none;
    outline: none;
    height: 45px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: white;
    border-bottom: 2px solid var(--border-color);
  }

  .newAlbumDataForm input:focus {
    border-bottom: 2px solid var(--primary-color);
  }

</style>