<template>
  <button class="sendButton"
    :class="bg"
    :style="`width: ${width}px; height: ${height}px`"
    @click="$emit('clicked')">
    <i v-if="type =='plane'" class="fas fa-paper-plane"></i>
    <i v-if="type =='plus'" class="fas fa-plus"></i>
    <i v-if="type =='search'" class="fas fa-search"></i>
    <i v-if="type =='down'" class="fas fa-arrow-down"></i>
  </button>
</template>

<script>
export default {
  name: 'SendButton',
  props: {
    type: { type: String, default: 'plane' },
    width: { type: String, default: '60' },
    height: { type: String, default: '45' },
    bg: { type: String, default: 'primary' },
  }
}
</script>

<style>
  .sendButton {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--primary-text-color);
    font-size: 1.35rem;
  }

  .sendButton.primary {
    background-color: var(--primary-color);
    color: var(--primary-text-color);
  }

  .sendButton.secondary {
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
  }
</style>