<template>
  <button class="sendButton" @click="$emit('clicked')">
    <i class="fas fa-paper-plane"></i>
  </button>
</template>

<script>
export default {
  name: 'SendButton'
}
</script>

<style>
  .sendButton {
    outline: none;
    border: none;
    width: 60px;
    height: 40px;
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--primary-text-color);
    font-size: 1.35rem;
  }

</style>