<template>
  <div class="albumView">
    <h1>Album name</h1>
    <div class="menuAlbum">
      <span class="dotMenu" @click="menu = true"></span>
    </div>
    <div class="menuDropDown" v-show="menu">
      <div class="overlay" @click="menu = false"></div>
      <div class="menuContent">
        <p>Change album name</p>
        <p>Delete album</p>
      </div>
    </div>
    <Photos />
  </div>
</template>

<script>
import Photos from '../components/Photos'

export default {
  name: 'AlbumView',
  components: { Photos },
  data() {
    return {
      menu: false
    }
  }
}
</script>

<style>
  .albumView {
    width: 95%;
    height: calc(100vh - 55px);
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

  .menuAlbum {
    width: 38px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    position: absolute;
    top: 20px;
    right: 10px;
  }

  .dotMenu {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-text-color);
    position: relative;
  }

  .dotMenu::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-text-color);
    position: absolute;
    left: 12px;
  }

  .dotMenu::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-text-color);
    position: absolute;
    right: 12px;
  }

    .menuDropDown,
    .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
  }

  .overlay {
    z-index: 9;
    background-color: #0007;
  }
  
  .menuContent {
    width: 230px;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
    position: absolute;
    top: 20px;
    right: 10px;
    z-index: 10;
    box-shadow: 0 0 3px #555;
  }

  .menuContent p {
    margin: 10px 0;
    font-size: 1.2rem;
  }
</style>