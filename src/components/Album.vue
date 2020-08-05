<template>
  <div class="album">
    <div class="albumFrame">
      <i class="far fa-images albumIcon"></i>
      <h2>Album name</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album'
}
</script>

<style>
  .album {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 3px;
  }

  .albumFrame {
    width: 110px;
    height: 110px;
    border: 2px solid var(--border-color);
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }

  .albumFrame > h2 {
    font-size: 1.0rem;
  }
</style>