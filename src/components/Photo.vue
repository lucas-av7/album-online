<template>
  <div class="photo">
    <div class="photoFrame">
      <i class="far fa-images albumIcon"></i>
    </div>
    <p>Photo name</p>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: ['photo']
}
</script>

<style>
  .photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 3px;
    width: 110px;
  }

  .photoFrame > p {
    font-size: 1.0rem;
    text-align: center;
    width: 100%;
    height: 20px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .photoFrame {
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