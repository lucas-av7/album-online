<template>
  <footer>
    <div class="menuFooter"
      @click="toHome()">
      <i class="fas fa-book"></i>
    </div>
    <div class="menuFooter"
      @click="toFavorites()">
      <i class="fas fa-heart"></i>
    </div>
    <div class="menuFooter"
      @click="$emit('search')">
      <i class="fas fa-search"></i>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    toHome() {
      if(this.$router.currentRoute.path == '/') return
      this.$router.push('/')
    },
    toFavorites() {
      if(this.$router.currentRoute.path == '/favorites') return
      this.$router.push('/favorites')
    }
  }
}
</script>

<style>
  footer {
    width: 100%;
    height: 55px;
    margin: 0 auto;
    border-top: 2px solid var(--border-color);
    box-shadow: 0 -1px 6px #0007;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #4CA8DA, #63AEAC);
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .menuFooter {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.7rem;
    cursor: pointer;
  }

  .menuFooter:nth-child(2) {
    border-left: 2px solid var(--border-color);
    border-right: 2px solid var(--border-color);
  }

  @media screen and (min-width: 1000px) {
    footer {
      max-width: 1000px;
      left: 50%;
      transform: translate(-50%);
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
</style>