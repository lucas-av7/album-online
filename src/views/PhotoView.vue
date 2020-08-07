<template>
  <div class="photoView">
    <h1>{{ photo.title }}</h1>
    <p>{{ album.title }}</p>
    <MenuButton>
      <p @click="editPhotoModal = true">Edit</p>
      <p @click="movePhotoModal = true">Move</p>
      <p @click="deletePhotoModal = true">Delete</p>
    </MenuButton>

    <Modal v-if="editPhotoModal" @clicked="editPhotoModal = false">
      <h1>Edit photo</h1>
      <Forms>
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Photo title">

        <label for="description">Description</label>
        <input type="text" name="description" placeholder="Photo description">
      </Forms>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="editPhotoModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        text="Save"
        type="primary" />
      </template>
    </Modal>

    <Modal v-if="deletePhotoModal" @clicked="deletePhotoModal = false">
      <h1>Delete photo?</h1>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="deletePhotoModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        @clicked="deletePhoto()"
        text="Delete"
        type="danger" />
      </template>
    </Modal>

    <Modal v-if="movePhotoModal" @clicked="movePhotoModal = false">
      <h1>Move photo</h1>
      <Forms>
        <label for="albumMove">Choose the album</label>
        <select name="albumMove" v-model="destinationAlbumId">
          <option disabled selected :value="null">Select one album</option>
          <option
            v-for="(albumItem, index) in albums"
            :value="albumItem.albumId" :key="index"
            :hidden="albumItem.albumId == albumId">
            {{ albumItem.title }}
          </option>
        </select>
      </Forms>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="movePhotoModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        @clicked="movePhoto()"
        text="Move"
        type="primary" />
      </template>
    </Modal>

    <figure>
      <img :src="photo.url" :alt="photo.title">
      <figcaption>{{ photo.description }}</figcaption>
      <div class="keywords">
        <p v-for="(keyword, index) in photo.keywords"
          :key="index">#{{ keyword }}</p>
      </div>
      <button class="arrow left">
        <i class="fas fa-arrow-circle-left"></i>
      </button>
      <button class="arrow right">
        <i class="fas fa-arrow-circle-right"></i>
      </button>
    </figure>
    <div class="commentsContainer">
      <div class="form">
        <Forms>
          <input type="text"
            placeholder="Write a comment..."
            v-model="commentText"
            @keypress.enter="addComment"
            ref="commentInput">
        </Forms>
        <SendButton @clicked="addComment" />
      </div>
      <div class="comments">
        <div v-for="(comment, index) in photo.comments" :key="index" class="comment">
          <div class="user">
            <i class="fas fa-user-alt"></i>
          </div>
          <div class="commentText">
            <h3>Anonymous</h3>
            <p>{{ comment }}</p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuButton from '../components/UI/MenuButton'
import Modal from '../components/UI/Modal'
import ActionButton from '../components/UI/ActionButton'
import Forms from '../components/UI/Forms'
import SendButton from '../components/UI/SendButton'

export default {
  name: 'PhotoView',
  components: { MenuButton, Modal, ActionButton, Forms, SendButton },
  props: ['albumId', 'photoId'],
  data() {
    return {
      editPhotoModal: false,
      deletePhotoModal: false,
      movePhotoModal: false,
      commentText: '',
      destinationAlbumId: null
    }
  },
  computed: {
    albums() {
      return this.$store.getters.getAlbums
    },
    album() {
      return this.albums.filter(album => {
        return album.albumId == this.albumId
      })[0] || []
    },
    photo() {
      if(this.album.length == 0) return []
      return this.album.photos.filter(photo => {
        return photo.photoId == this.photoId
      })[0]
    }
  },
  methods: {
    addComment() {
      if(this.commentText == '') return
      const commentInfo = {
        albumId: this.albumId,
        photoId: this.photoId,
        comment: this.commentText.trim()
      }
      this.$store.dispatch('addComment', commentInfo)
      this.commentText = ''
      this.$refs.commentInput.blur()
    },
    movePhoto() {
      if(this.destinationAlbumId == null) return
      document.body.style.overflow = 'initial'
      let photoData = {
        photoId: this.photoId,
        albumId: this.albumId,
        destinationAlbumId: this.destinationAlbumId
      }
      this.$store.dispatch('movePhoto', photoData)
      this.$router.push(`/album/${this.destinationAlbumId}`)
    },
    deletePhoto() {
      const photoInfo = {
        photoId: this.photoId,
        albumId: this.albumId
      }
      this.$store.dispatch('deletePhoto', photoInfo)
      document.body.style.overflow = 'initial'
      this.$router.push(`/album/${this.albumId}`)
    }
  },
  created() {
    if(this.album.length == 0) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .photoView {
    width: 95%;
    min-height: calc(100vh - 55px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
  }

  .photoView h1 {
    text-align: center;
  }

  figure {
    width: 85%;
    padding: 10px;
    margin: 15px auto;
    position: relative;
  }

  figure img {
    width: 100%;
    border: 10px solid #FFF0D7;
  }

  figcaption {
    text-align: center;
  }

  .keywords {
    margin-top: 5px;
  }

  .keywords p {
    display: inline;
    text-decoration: underline;
    font-style: italic;
    font-weight: bold;
    margin-right: 5px;
    color: var(--link-keywords);
  }

  .commentsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .commentsContainer .form {
    width: 85%;
    display: flex;
    justify-content: center;
  }

  .comments {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;

  }

  .comment {
    display: flex;
    align-items: center;
    padding: 6px;
    border-bottom: 1px solid var(--border-color);
  }

  .comment .user {
    margin-right: 10px;
    font-size: 1.6rem;
  }

  .commentText h3 {
    font-size: 1.0rem;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2.2rem;
    color: var(--secondary-color);
  }

  .arrow.left {
    left: -32px;
  }

  .arrow.right {
    right: -32px;
  }
</style>