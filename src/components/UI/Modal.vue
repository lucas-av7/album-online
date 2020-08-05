<template>
  <div class="modal">
    <div class="overlayModal" @click="$emit('clicked')"></div>
    <div class="modalData">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 30px 20px;
    margin: 0 auto;
    background-color: var(--secondary-color);
    border-radius: 10px;
  }

  .modalData h1 {
    color: var(--secondary-text-color);
    margin-bottom: 20px;
  }
</style>