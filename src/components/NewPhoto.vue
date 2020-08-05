<template>
  <Modal @clicked="$emit('close')">
    <h1>Upload photo</h1>
    <div class="newPhotoDataForm">
      <div class="imagePreview" @click="$refs.uploadPhotoButton.click()">
        <i class="far fa-file-image"></i>
      </div>
      <input type="file" name="photo" ref="uploadPhotoButton" accept="image/*">

      <label for="title">Title</label>
      <input type="text" name="title" placeholder="Photo title">

      <label for="description">Description</label>
      <input type="text" name="description" placeholder="Photo description">

      <label for="keyswords">Keyswords</label>
      <input type="text" name="keyswords" placeholder="Comma-separated. Ex: flower, garden, sunrise">
    </div>
    <div class="newPhotoDataButtons">
      <ActionButton
        @clicked="$emit('close')"
        text="Cancel"
        type="secondary" />
      <ActionButton
        text="Upload"
        type="primary" />
    </div>
  </Modal>
</template>

<script>
import ActionButton from './UI/ActionButton'
import Modal from './UI/Modal'

export default {
  name: 'NewPhoto',
  components: { ActionButton, Modal }
}
</script>

<style>
  .newPhotoDataForm {
    display: flex;
    width: 95%;
    flex-direction: column;
    color: var(--secondary-text-color);
  }

  .newPhotoDataForm .imagePreview {
    align-self: center;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6.0rem;
    border: 2px solid var(--border-color);
    border-radius: 10%;
    color: var(--primary-color);
    cursor: pointer;
  }

  .newPhotoDataForm input {
    border: none;
    outline: none;
    height: 45px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: white;
    border-bottom: 2px solid var(--border-color);
  }

    .newPhotoDataForm input:focus {
    border-bottom: 2px solid var(--primary-color);
  }

  .newPhotoDataForm input[name=photo] {
    display: none;
  }

  .newPhotoDataButtons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }

</style>