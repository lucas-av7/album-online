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
    width: 90%;
    height: 55px;
    margin: 0 auto;
    border-bottom: 1px solid #ddda;
    display: flex;
    align-items: center;
  }

  header img {
    width: 145px;
  }
</style>