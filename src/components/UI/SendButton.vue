<template>
  <button class="sendButton"
    @click="$emit('clicked')">
    <i v-if="type =='plane'" class="fas fa-paper-plane"></i>
    <i v-if="type =='plus'" class="fas fa-plus"></i>
  </button>
</template>

<script>
export default {
  name: 'SendButton',
  props: {
    type: { type: String, default: 'plane' }
  }
}
</script>

<style>
  .sendButton {
    outline: none;
    border: none;
    width: 60px;
    height: 45px;
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--primary-text-color);
    font-size: 1.35rem;
  }
</style>