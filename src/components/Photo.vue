<template>
  <div class="photo">
    <router-link :to="`/photo/${photo.albumId}/${photo.photoId}`" class="linkRouter">
      <div class="photoFrame">
        <img :src="photo.url" :alt="photo.title">
      </div>
    </router-link>
    <p>{{ photo.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photo: { type: Object, required: true }
  }
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

  .photo > p {
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
    overflow: hidden;
  }

  .photoFrame img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

</style>