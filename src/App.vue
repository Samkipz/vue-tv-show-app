<template>
  <v-app>
    <v-snackbar v-model="snackbar.showing" color="success" top>
      {{ snackbar.text }}
      <v-btn color="cyan" text @click="snackbar.showing = false" justify-end>
        Ok
      </v-btn>

    </v-snackbar>
    <v-app-bar color="cyan lighten-2 accent-4" prominent elevation="4" dark>
      <v-app-bar-nav-icon>
        <v-app-bar-nav-icon>
          <img class="mr-3" :src="'https://cdn-icons-png.flaticon.com/512/2798/2798007.png'" height="40" />
        </v-app-bar-nav-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link :to="{ name: 'home' }">DRIFTWOOD SHOWS</router-link>
        <v-btn class="ma-2" outlined color="Normal" to="/admin/videos"
          v-if="currentUser.user && currentUser.user.attributes.admin">
          ADMIN
        </v-btn>
      </v-toolbar-title>

      <v-spacer> </v-spacer>



      <div class="d-flex align-center text-uppercase" v-if="currentUser.user"><v-icon :icon="icons.mdiAccount" left />
        <router-link :to="{ name: 'user-profile', params: { id: currentUser.user.id } }">
          {{
            currentUser.user.name
          }}
        </router-link>
        <v-btn class="ma-2" outlined color="Normal" @click="logoutUser">
          <v-icon :icon="icons.mdiLogout" left />Logout
        </v-btn>
      </div>

      <div v-else>
        <v-btn class="ma-2" outlined color="Normal" to="/register">
          <v-icon :icon="icons.mdiAccountLockOpen" left />Register
        </v-btn>

        <v-btn class="ma-2" outlined color="Normal" to="/login">
          <v-icon :icon="icons.mdiLogin" left />Login
        </v-btn>
      </div>


    </v-app-bar>



    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { mapState } from 'vuex';
import { mdiAccount, mdiLogout, mdiLogin, mdiAccountLockOpen } from '@mdi/js'



export default {
  name: 'App',
  data() {
    return {
      icons: {
        mdiAccount,
        mdiLogout,
        mdiLogin,
        mdiAccountLockOpen
      }
    }
  },
  mounted() {
    this.$store.dispatch('loadVideos')
    this.$store.dispatch("loadUsers")
    this.$store.dispatch('loadCurrentUser')
    // this.$store.dispatch('loadFavVids', attribs.favVideos);
  },
  computed: {
    ...mapState(['currentUser', 'snackbar'])
  },

  methods: {
    async logoutUser() {
      await this.$store.dispatch("logoutUser");
      this.$store.dispatch('setSnackbar', {
        showing: true,
        text: `Logout successful `
      })
      this.$router.push("/")
    }
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