<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view> 
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
