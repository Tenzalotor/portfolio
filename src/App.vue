<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    appHeader: Header
  }
}  
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Bad Script', cursive;
  }
</style>
