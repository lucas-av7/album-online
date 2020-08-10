<template>
  <div id="app"
    v-scroll="handleScroll">
    <Header />
    <transition name="switchView" mode="out-in">
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
      if(this.lastY > window.scrollY) {
        this.showFooter = true
        this.lastY = window.scrollY
      } else {
        this.showFooter = false
        this.lastY = window.scrollY
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
    animation: showFooter 0.3s ease-out;
  }

  .footerTransition-leave-active {
    animation: hideFooter 0.3s ease-out;
  }

  @keyframes showFooter {
    from { opacity: 0; bottom: -55px; }
    to { opacity: 1; bottom: 0; }
  }

  @keyframes hideFooter {
    from { opacity: 1; bottom: 0; }
    to { opacity: 0; bottom: -55px; }
  }

  .linkRouter {
    color: transparent;
  }

  .switchView-enter-active {
    animation: showView 0.15s ease;
  }

  .switchView-leave-active {
    animation: hideView 0.15s ease;
  }

  @keyframes showView {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes hideView {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .errorAnimation-enter-active {
    animation: showError 0.5s ease;
  }

  .errorAnimation-leave-active {
    animation: hideError 0.5s ease;
  }

  @keyframes showError {
    from { opacity: 0; }
    to { opacity: 1;  }
  }

  @keyframes hideError {
    from { opacity: 1; }
    to { opacity: 0; }
  }
</style>
