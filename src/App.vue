<template>
  <div id="app"
    v-scroll="handleScroll">
    <Header />
    <router-view />
    <transition name="footerTransition">
      <Footer v-show="showFooter" />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Header, Footer },
  data() {
    return {
      showFooter: true
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.showFooter = false
      } else {
        this.showFooter = true
      }
    }
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #028FDF;
    --secondary-color: #F6F9FC;
    --primary-text-color: #FFF;
    --secondary-text-color: #000;
    --warning: #FC8600;
    --danger: #E63946 ;
    --border-color: #DDDA;
    --link-keywords: #073B4C;
  }

  body {
    background: linear-gradient(to right, #4CA8DA, #63AEAC);
    font-family: 'Roboto', sans-serif;
    font-size: 62,5%;
    color: var(--primary-text-color);
  }

  .footerTransition-enter-active {
    animation: showFooter 0.5s;
  }

  .footerTransition-leave-active {
    animation: hideFooter 0.5s;
  }

  @keyframes showFooter {
    from { opacity: 0; bottom: -55px; }
    to { opacity: 1; bottom: 0; }
  }

  @keyframes hideFooter {
    from { opacity: 1; bottom: 0; }
    to { opacity: 0; bottom: -55px; }
  }
</style>
