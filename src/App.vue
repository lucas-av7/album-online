<template>
  <div id="app"
    v-scroll="handleScroll">
    <Header />
    <transition name="opacityAnimation" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
    <transition name="footerTransition" mode="out-in">
      <Footer
      v-if="!searchBoxOpen && showFooter"
      @search="searchBoxOpen = true"/>
      <SearchBox
      v-if="searchBoxOpen"
      @close="searchBoxOpen = false" />
    </transition>
    <GlobalLoading v-if="globalLoading" />
    <transition name="errorAnimation">
      <GlobalError v-if="globalErrorText" :error="globalErrorText" />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import GlobalLoading from './components/UI/GlobalLoading'
import GlobalError from './components/UI/GlobalError'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SearchBox,
    GlobalLoading,
    GlobalError
    },
  data() {
    return {
      showFooter: true,
      searchBoxOpen: false,
      lastY: 0
    }
  },
  computed: {
    globalLoading() {
      return this.$store.getters.globalLoading
    },
    globalErrorText() {
      return this.$store.getters.globalError
    }
  },
  methods: {
    handleScroll() {
      if(this.lastY > window.pageYOffset) {
        this.showFooter = true
        this.lastY = window.pageYOffset
      } else {
        this.showFooter = false
        this.lastY = window.pageYOffset
      }
    }
  }
}
</script>

<style>
@import './animations/vueTransitions.css';

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
    color: var(--primary-text-color);
  }

  .linkRouter {
    color: transparent;
  }

</style>
