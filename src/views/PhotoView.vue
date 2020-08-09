<template>
  <div class="photoView">
    <h1>{{ photo.title }}</h1>
    <h3>Album:
      <router-link class="albumLink"
      :to="`/album/${album.albumId}`">
      {{ album.title }}</router-link>
    </h3>
    <MenuButton>
      <p @click="editPhotoModal = true, retrieveInfo()">Edit</p>
      <p @click="movePhotoModal = true">Move</p>
      <p @click="deletePhotoModal = true">Delete</p>
    </MenuButton>
    <transition name="modal">
      <Modal v-if="editPhotoModal" @clicked="editPhotoModal = false">
        <h1>Edit photo</h1>
        <Forms>
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Photo title"
            v-model="editTitleText"
            maxlength="25">

          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Photo description"
            v-model="editDescriptionText"
            maxlength="50">

          <label for="keywords">Keywords</label>
          <div class="keywordsContainer">
            <div class="keywordsForm">
              <input type="text" name="keywords"
                placeholder="At least 3 characters. Max: 5 keywords."
                v-model="photoKeywordsText"
                maxlength="15" @keypress.enter="editAddKeyword()">
              <SendButton type="plus" @clicked="editAddKeyword()" />
            </div>
            <div class="keywordsList">
              <p v-for="(keyword, index) in editPhotoKeywords"
                :key="index">
                {{ keyword }}
                <i class="fas fa-times-circle remove"
                  @click="editPhotoKeywords.splice(index, 1)"></i>
              </p>
            </div>
          </div>
        </Forms>
        <template slot="buttonsArea">
          <ActionButton
            @clicked="editPhotoModal = false"
            text="Cancel"
            option="closeModal"
            type="secondary" />
          <ActionButton
            text="Save"
            type="primary"
            @clicked="editPhoto()" />
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
    </transition>
    <figure>
      <img :src="photo.url" :alt="photo.title">
      <figcaption>{{ photo.description }}</figcaption>
      <div class="photoButtons">
        <button
          class="arrow left"
          v-if="previusPhoto"
          @click="switchPhoto(previusPhoto)"
          title="Previus photo">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
        <div class="favorite" @click="favoriteToggle()">
          <i v-if="!photo.favorited" class="far fa-heart heartEmpty"></i>
          <i v-else class="fas fa-heart heartFull"></i>
        </div>
        <button
          class="arrow right"
          v-if="nextPhoto"
          @click="switchPhoto(nextPhoto)"
          title="Next photo">
          <i class="fas fa-arrow-circle-right"></i>
        </button>
      </div>
      <div class="keywords">
        <p v-for="(keyword, index) in photo.keywords"
          :key="index">
          <router-link class="linkKeywords" :to="`/search/${keyword}`">
            #{{ keyword }}
          </router-link>
        </p>
      </div>
    </figure>
    <div class="commentsContainer">
      <div class="form">
        <Forms>
          <input type="text"
            placeholder="Write a comment..."
            v-model="commentText"
            @keypress.enter="addComment"
            ref="commentInput"
            maxlength="100">
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
          <div class="deleteComment">
            <i class="fas fa-times remove"
              @click="deleteComment(index)"></i>
          </div>
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
import regexMixin from '../mixin/regexMixin'

export default {
  name: 'PhotoView',
  components: { MenuButton, Modal, ActionButton, Forms, SendButton },
  props: ['albumId', 'photoId'],
  mixins: [regexMixin],
  data() {
    return {
      editPhotoModal: false,
      deletePhotoModal: false,
      movePhotoModal: false,
      commentText: '',
      destinationAlbumId: null,
      editTitleText: '',
      editDescriptionText: '',
      editPhotoKeywords: [],
      photoKeywordsText: '',
      photoIndex: null
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
      })[0] || []
    },
    nextPhoto() {
      if(this.photoIndex == this.album.photos.length - 1) return null
      return this.album.photos[this.photoIndex + 1].photoId
    },
    previusPhoto() {
      if(this.photoIndex == 0) return null
      return this.album.photos[this.photoIndex - 1].photoId
    }
  },
  watch: {
    editTitleText() {
      this.editTitleText = this.removeSpecialCharacters(this.editTitleText)
    },
    editDescriptionText() {
      this.editDescriptionText = this.removeSpecialCharacters(this.editDescriptionText)
    },
    photoKeywordsText() {
      this.photoKeywordsText = this.removeSpecialCharactersKeywords(this.photoKeywordsText).toLowerCase()
    }
  },
  methods: {
    switchPhoto(photoId) {
      if(this.$router.currentRoute.path == `/photo/${this.albumId}/${photoId}`) return
      this.$router.push(`/photo/${this.albumId}/${photoId}`)
    },
    retrieveInfo() {
      this.editTitleText = this.photo.title
      this.editDescriptionText = this.photo.description
      this.editPhotoKeywords = [...this.photo.keywords]
    },
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
    deleteComment(commentIndex) {
      const commentInfo = {
        albumId: this.albumId,
        photoId: this.photoId,
        commentIndex
      }
      this.$store.dispatch('deleteComment', commentInfo)
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
    },
    editAddKeyword() {
      if(this.editPhotoKeywords.includes(this.photoKeywordsText)) return
      if(this.photoKeywordsText.length > 2
        && this.editPhotoKeywords.length < 5) {
        this.editPhotoKeywords.push(this.photoKeywordsText)
        this.photoKeywordsText = ''
      }
    },
    editPhoto() {
      this.editTitleText = this.editTitleText.trim()
      this.editDescriptionText = this.editDescriptionText.trim()

      // Checks for changes
      if(this.editTitleText == '' || (this.editTitleText == this.photo.title
            && this.editDescriptionText == this.photo.description
            && this.editPhotoKeywords.toString() == this.photo.keywords.toString())) {
        document.body.style.overflow = 'initial'
        this.editPhotoModal = false
      } else {
        const editInfo = {
          albumId: this.albumId,
          photoId: this.photoId,
          newTitle: this.editTitleText,
          newDescription: this.editDescriptionText,
          newKeywords: this.editPhotoKeywords
        }
        this.$store.dispatch('editPhoto', editInfo)
        document.body.style.overflow = 'initial'
        this.editPhotoModal = false
      }
    },
    favoriteToggle() {
      const photoInfo = {
        albumId: this.albumId,
        photoId: this.photoId,
      }
      this.$store.dispatch('favoriteToggle', photoInfo)
    }
  },
  created() {
    const albumIndex = this.$store.getters.getAlbumIndex(this.albumId)
    if(albumIndex == -1){
      this.$router.push('/') 
    } else {
      const photoIndex = this.$store.getters.getPhotoIndex({ albumIndex, photoId: this.photoId })
      if(photoIndex == -1) {
        this.$router.push('/') 
      } else {
        this.photoIndex = photoIndex
      }
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

  .photoView h3 {
    font-size: 1.2rem;
  }

  .albumLink {
    color: var(--link-keywords);
  }

  figure {
    width: 85%;
    max-width: 800px;
    padding: 10px;
    margin: 5px auto;
    position: relative;
    text-align: center;
  }

  figure img {
    max-width: 100%;
    max-height: 90vh;
    border: 10px solid #FFF0D7;
  }

  figcaption {
    text-align: center;
    word-wrap: break-word;
  }

  .photoButtons {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100px;
    margin: 0 auto;
    margin-top: 10px;
  }

  .favorite {
    width: 35px;
    cursor: pointer;
  }

  .favorite i {
    font-size: 2rem;
    color: var(--primari-text-color);

  }



  .arrow {
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2rem;
    color: var(--secondary-color);
  }

  .arrow.left {
    left: -40px;
  }

  .arrow.right {
    right: -40px;
  }

  .keywords {
    margin: 10px auto 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .keywords p {
    display: inline;
    text-decoration: underline;
    font-style: italic;
    font-weight: bold;
    margin: 3px;
  }

  .linkKeywords {
    color: var(--link-keywords);
  }

  .commentsContainer {
    width: 90%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .commentsContainer .form {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .comments {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .comment {
    display: flex;
    align-items: center;
    padding: 6px;
    border-bottom: 1px solid var(--border-color);
    word-break: break-word;
    position: relative;
  }

  .comment .user {
    margin-right: 10px;
    font-size: 1.6rem;
  }

  .comment .deleteComment {
    position: absolute;
    top: 6px;
    right: 10px;
    cursor: pointer;
  }

  .commentText h3 {
    font-size: 1.0rem;
  }
</style>