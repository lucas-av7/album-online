<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Header, Footer }
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
</style>
