<template>
  <div class="globalLoading">
    <div class="loadIcon">
      <i class="fas fa-circle-notch"></i>
    </div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'GlobalLoading'
}
</script>

<style>
  .globalLoading {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #0009;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .globalLoading .loadIcon {
    color: var(--primary-text-color);
    animation: rotate-center 2s cubic-bezier(0.680, -0.550, 0.265, 1.550) infinite both;
    font-size: 4rem;
  }

  .globalLoading p {
    margin-top: 10px;
    font-size: 1.6rem;
  }

  @keyframes rotate-center {
  0% {
    transform: rotate(0) scale(1);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>