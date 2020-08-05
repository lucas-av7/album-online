<template>
  <div class="photoView">
    <h1>Photo Title</h1>
    <p>Album: Family</p>
    <MenuButton>
      <p @click="editFotoModal = true">Edit</p>
      <p @click="moveFotoModal = true">Move</p>
      <p @click="deleteFotoModal = true">Delete</p>
    </MenuButton>

    <Modal v-if="editFotoModal" @clicked="editFotoModal = false">
      <h1>Edit photo</h1>
      <Forms>
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Photo title">

        <label for="description">Description</label>
        <input type="text" name="description" placeholder="Photo description">
      </Forms>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="editFotoModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        text="Save"
        type="primary" />
      </template>
    </Modal>

    <Modal v-if="deleteFotoModal" @clicked="deleteFotoModal = false">
      <h1>Delete photo?</h1>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="deleteFotoModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        text="Delete"
        type="danger" />
      </template>
    </Modal>

    <Modal v-if="moveFotoModal" @clicked="moveFotoModal = false">
      <h1>Move photo</h1>
      <Forms>
        <label for="albumMove">Choose the album</label>
        <select name="albumMove">
          <option value="1">Family</option>
          <option value="2">Vacation</option>
          <option value="2">Work</option>
        </select>
      </Forms>
      <template slot="buttonsArea">
      <ActionButton
        @clicked="moveFotoModal = false"
        text="Cancel"
        option="closeModal"
        type="secondary" />
      <ActionButton
        text="Move"
        type="primary" />
      </template>
    </Modal>

    <figure>
      <img src="https://image.cnbcfm.com/api/v1/image/106482455-1586450808751gettyimages-1209295455.jpeg?v=1586450844&w=1400&h=950" alt="">
      <figcaption>Photo description</figcaption>
      <div class="keywords">
        <p>#flowers</p>
        <p>#garden</p>
        <p>#sunrise</p>
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
        <input type="text" placeholder="Write a comment...">
        <button class="sendButton">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
      <div class="comments">
        <div v-for="i in 5" :key="i" class="comment">
          <div class="user">
            <i class="fas fa-user-alt"></i>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint ab, mollitia eum vitae repellat?</p>
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

export default {
  name: 'PhotoView',
  components: { MenuButton, Modal, ActionButton, Forms },
  data() {
    return {
      editFotoModal: false,
      deleteFotoModal: false,
      moveFotoModal: false
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
    margin-bottom: 55px;
  }

  .commentsContainer .form {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .commentsContainer .form input {
    width: 70%;
    height: 40px;
    padding: 10px;
  }

  .commentsContainer .form input,
  .commentsContainer .form button {
    outline: none;
    border: none;
  }

  .commentsContainer .form button {
    width: 60px;
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--primary-text-color);
    font-size: 1.35rem;
  }

  .commentsContainer .form {
    display: flex;
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
    padding: 5px;
    border-bottom: 1px solid var(--border-color);
  }

  .comment .user {
    margin-right: 10px;
    font-size: 1.6rem;
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