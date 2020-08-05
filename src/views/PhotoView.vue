<template>
  <div class="photoView">
    <h1>Photo Title</h1>
    <p>Album: Family</p>
    <MenuButton>
      <p>Edit</p>
      <p>Delete</p>
      <p>Move</p>
    </MenuButton>
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
        <div class="comment">
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

export default {
  name: 'PhotoView',
  components: { MenuButton }
}
</script>

<style>
  .photoView {
    width: 95%;
    height: calc(100vh - 55px);
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