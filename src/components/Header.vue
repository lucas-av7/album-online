<template>
    <header>
      <img src="../assets/logo.png" alt="Logo Click">
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  header {
    width: 95%;
    height: 55px;
    margin: 0 auto;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
  }

  header img {
    width: 145px;
  }
</style>