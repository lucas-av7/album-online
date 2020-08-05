<template>
  <div class="photo">
    <div class="photoFrame">
      <i class="far fa-images albumIcon"></i>
      <h2>Photo name</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo'
}
</script>

<style>
  .photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 3px;
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
  }

  .photoFrame > h2 {
    font-size: 1.0rem;
  }
</style>