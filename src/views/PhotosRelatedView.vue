<template>
  <div class="searchView">
    <h1>Related photos</h1>
    <h3>#{{ keyword }}</h3>

    <div class="photos">
      <Photo v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>

    <div v-if="photos.length == 0" class="noResults">
      <i class="far fa-times-circle errorIcon"></i>
      <p>No results found</p>
    </div>

  </div>
</template>

<script>
import Photo from '../components/Photo'

export default {
  name: 'SearchView',
  components: { Photo },
  props: ['type' ,'keyword'],
  data() {
    return {
      photos: []
    }
  },
  created() {
    this.$store.getters.getAlbums.map(album => {
      album.photos.map(photo => {
        if(this.keyword != '') {
          if(photo.keywords.includes(this.keyword)) {
            this.photos.push(photo)
          }
        }
      })
    })
  }
}
</script>

<style>
  .searchView {
    width: 95%;
    min-height: calc(100vh - 55px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  }

  .searchView h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  .searchView h3 {
    color: var(--link-keywords);
  }

  .noResults {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }

  .noResults .errorIcon {
    font-size: 3.5rem;
  }

  .noResults p {
    margin-top: 10px;
  }

  .searchView .photos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-evenly;
  }
</style>