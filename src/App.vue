<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: { Header }
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
    --text-warning: #fc8600;
  }

  body {
    background: linear-gradient(-45deg, #4CA8DA, #63AE99);
    font-family: 'Roboto', sans-serif;
    font-size: 62,5%;
    color: var(--primary-text-color);
  }
</style>
