<template>
  <div class="album">
    <div class="albumFrame">
      <i class="far fa-images albumIcon"></i>
    </div>
    <p>{{ album.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    album: { type: Object, required: true }
  }
}
</script>

<style>
  .album {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 3px;
    width: 110px;
  }

  .album > p {
    font-size: 1.0rem;
    text-align: center;
    width: 100%;
    height: 20px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    padding: 2px;
  }

</style>