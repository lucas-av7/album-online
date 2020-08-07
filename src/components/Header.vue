<template>
    <header>
      <img @click="toHome()" src="../assets/logo.png" alt="Logo Click">
    </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toHome() {
      if(this.$router.currentRoute.path == '/') return
      this.$router.push('/')
    }
  }
}
</script>

<style>
  header {
    width: 100%;
    padding: 0 15px;
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