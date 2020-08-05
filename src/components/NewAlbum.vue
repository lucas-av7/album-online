<template>
  <div class="newAlbum">
    <div class="overlaynewAlbum" @click="$emit('close')"></div>
    <div class="newAlbumData">
      <h1>New album</h1>
      <div class="newAlbumDataForm">
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Album title">

        <label for="description">Description</label>
        <input type="text" name="description" placeholder="Album description">
      </div>
      <div class="newAlbumDataButtons">
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
  name: 'NewAlbum',
  components: { ActionButton }
}
</script>

<style>
  .newAlbum {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlaynewAlbum {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    user-select: none;
    z-index: 9;
    background-color: #0007;

  }

  .newAlbumData {
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

  .newAlbumData h1 {
    color: var(--secondary-text-color);
    margin-bottom: 20px;
  }

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

  .newAlbumDataForm input[name=photo] {
    display: none;
  }

  .newAlbumDataButtons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }

</style>