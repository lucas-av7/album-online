<template>
  <Modal @clicked="$emit('close')">
    <h1>Upload photo</h1>
    <Forms>
      <div class="imagePreview" @click="$refs.uploadPhotoButton.click()">
        <i class="far fa-file-image"></i>
      </div>
      <input type="file" name="photo" ref="uploadPhotoButton" accept="image/*">

      <label for="title">Title</label>
      <input type="text" name="title"
        placeholder="Photo title"
        v-model="photoTitle">

      <label for="description">Description</label>
      <input type="text" name="description"
        placeholder="Photo description"
        v-model="photoDescription">

      <label for="keywords">Keywords</label>
      <input type="text" name="keywords"
        placeholder="Comma-separated. Ex: flower, garden, sunrise"
        v-model="photoKeywords">
    </Forms>
    <template slot="buttonsArea">
      <ActionButton
        @clicked="$emit('close')"
        text="Cancel"
        option="closeModal"
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
import regexMixin from '../mixin/regexMixin'

export default {
  name: 'NewPhoto',
  mixins: [regexMixin],
  components: { ActionButton, Modal, Forms },
  data() {
    return {
      photoTitle: '',
      photoDescription: '',
      photoKeywords: '',
      error: ''
    }
  },
  watch: {
    photoTitle() {
      this.photoTitle = this.removeSpecialCharacters(this.photoTitle)
    },
    photoDescription() {
      this.photoDescription = this.removeSpecialCharacters(this.photoDescription)
    },
    photoKeywords() {
      this.photoKeywords = this.removeSpecialCharacters(this.photoKeywords)
    }
  }
}
</script>

<style>
  .imagePreview {
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

  input[name=photo] {
    display: none;
  }
</style>