<template>
    <button
      class="actionButton"
      @click="$emit('clicked')"
      :class="type">
      {{ text }}
    </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text', 'type']
}
</script>

<style>
  .actionButton {
    width: 100px;
    height: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 5px;
  }

  .actionButton.primary {
    background-color: var(--primary-color);
    color: var(--primary-text-color);
  }

  .actionButton.secondary {
    background-color: transparent;
    border: 2px solid var(--border-color);
    color: var(--secondary-text-color);
  }

</style>