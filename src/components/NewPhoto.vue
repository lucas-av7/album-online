<template>
  <div class="newPhoto">
    <div class="overlayNewPhoto" @click="$emit('close')"></div>
    <div class="newPhotoData">
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
    </div>
  </div>
</template>

<script>
import ActionButton from './UI/ActionButton'

export default {
  name: 'NewPhoto',
  components: { ActionButton }
}
</script>

<style>
  .newPhoto {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlayNewPhoto {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    user-select: none;
    z-index: 9;
    background-color: #0007;

  }

  .newPhotoData {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 30px 20px;
    margin: 0 auto;
    background-color: var(--secondary-color);
    border-radius: 10px;
  }

  .newPhotoData h1 {
    color: var(--secondary-text-color);
    margin-bottom: 20px;
  }

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