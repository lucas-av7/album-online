<template>
  <div class="modal">
    <div class="overlayModal"
      @click="$emit('clicked')"></div>
    <div class="modalData">
      <slot></slot>
    <div class="buttonsArea">
      <slot name="buttonsArea"></slot>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.body.style.overflow = 'hidden'
  },
  destroyed() {
    document.body.style.overflow = 'initial'
  }
}
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 8;
  }

  .overlayModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    user-select: none;
    z-index: 9;
    background-color: #0007;

  }

  .modalData {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 550px;
    max-height: 95vh;
    padding: 50px 10px;
    margin: 0 auto;
    background-color: var(--secondary-color);
    border-radius: 10px;
    overflow-y: auto;
  }

  .modalData h1 {
    color: var(--secondary-text-color);
    margin-bottom: 10px;
  }

  .buttonsArea {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
  }
</style>