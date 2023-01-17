<template>
  <navbar>
    <template v-slot:nav-item>
      <router-link to="/" class="nav-link">Home</router-link>
      <!-- <router-link to="/register" class="nav-link">Register</router-link> -->
      <!-- <router-link to="/Login" class="nav-link">Login</router-link> -->
    </template>
  </navbar>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
$blackText: #494a4a;

*,
::after,
::before {
  box-sizing: border-box;
}

html {
  color: $blackText;
  font-weight: normal;
  margin: 0;
  width: 100vw;
  padding: 0;
  font-size: 2.5vmin;
}
</style>