<template>
  <v-app>
    <div>
      <Navbar />
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('loadVideos');
  },

  components: {
    Navbar
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  text-transform: none;
  color: black;
}
</style>