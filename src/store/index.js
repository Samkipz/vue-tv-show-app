import { createStore } from 'vuex'
import Api from '@/service/api'



export default createStore({
  state: {
    videos: [],
    users: [],
    userAttributes: {},
    currentUser: {},
    snackbar: {}
  },
  getters: {
  },
  mutations: {
    //=========================== VIDEO MUTATIONS ===============//
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_FAVOURITED_VIDEOS(state, attribs) {
      state.userAttributes = attribs;
      window.localStorage.userAttribs = JSON.stringify(attribs)
    },
    ADDED_VIDEO_TO_FAV(state, videoId) {
      let currentUserFavList = state.currentUser.user.attributes.favVideos
      if (!currentUserFavList.includes(videoId)) {
        state.currentUser.user.attributes.favVideos.push(videoId)
        window.localStorage.currentUser = JSON.stringify(state.currentUser)
      }
    },
    REMOVE_VIDEO_FROM_FAV(state, videoId) {
      let currentUserFavList = state.currentUser.user.attributes.favVideos
      if (currentUserFavList.includes(videoId)) {
        let newState = state.currentUser
        const index = newState.user.attributes.favVideos.indexOf(videoId)
        if (index > -1) { // only splice array when item is found
          newState.user.attributes.favVideos.splice(index, 1); // 2nd parameter means remove one item only
        }
        window.localStorage.currentUser = JSON.stringify(state.currentUser)
      }
    },
    ADD_VIDEO(state, video) {
      let videos = state.videos.concat(video);
      state.videos = videos;
    },
    EDIT_VIDEO(state, video) {
      state.videos.forEach(v => {
        if (v.id == video.id) {
          v = video;
        }
      })
    },
    DELETE_VIDEO(state, videoId) {
      let videos = state.videos.filter(vid => vid.id != videoId)
      state.videos = videos;
    },


    //==================================== USER'S MUTATIONS==================//
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
    LOGOUT_USER(state) {
      state.currentUser = {}
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_SNACKBAR(state, snackbar) {
      state.snackbar = snackbar
    }
  },
  actions: {
    //============================== VIDEOS ACTIONS ======================//

    // --------------- Load All Videos-------------------------------
    async loadVideos({ commit }) {
      let response = await Api().get('/videos');
      commit('SET_VIDEOS', response.data);
    },

    // --------------- Add/Remove Video to Favourites -------------
    async addFav({ commit }, videoId) {
      commit('ADDED_VIDEO_TO_FAV', videoId)
    },
    removeFav({ commit }, videoId) {
      commit('REMOVE_VIDEO_FROM_FAV', videoId)
    },

    // --------------- Create New Video-----------------------------
    async createVideo({ commit }, video) {
      let response = await Api().post('/videos', video)
      let addedVideo = response.data
      commit('ADD_VIDEO', addedVideo);
      return addedVideo
    },

    // --------------- Edit Video --------------------------------
    async editVideo({ commit }, video) {
      let response = await Api().put(`/videos/${video.id}`, video);
      let updatedVideo = response.data
      commit('EDIT_VIDEO', updatedVideo)
      return updatedVideo
    },

    async deleteVideo({ commit }, video) {
      let response = await Api().delete(`/videos/${video.id}`)
      if (response.status == 200 || response.status == 204) {
        commit('DELETE_VIDEO', video.id);
      }
    },

    //============================== USER'S ACTIONS=================//
    async loadUsers({ commit }) {
      let response = await Api().get('/users');
      commit('SET_USERS', response.data);
    },


    async loadCurrentUser({ commit }) {
      let user = JSON.parse(window.localStorage.currentUser);

      commit('SET_CURRENT_USER', user);
    },

    userAttribs({ commit }, attribs) {
      commit('SET_FAVOURITED_VIDEOS', attribs)
    },


    async registerUser({ commit }, userInfo) {
      try {
        let response = await Api().post('/register', userInfo)
        // debugger
        let user = response.data
        // debugger

        commit('SET_CURRENT_USER', user)
        return user
      } catch (error) {
        return { error: "An error occured, please check you info and try again" }
      }
    },
    async loginUser({ commit }, loginInfo) {
      try {
        let response = await Api().post('/login', loginInfo)
        let user = response.data
        commit('SET_CURRENT_USER', user)
        return user
      } catch (error) {
        return { error: "email or password incorrect!" }
      }
    },
    logoutUser({ commit }) {
      commit('LOGOUT_USER');
    },
    setSnackbar({ commit }, snackbar) {
      snackbar.showing = true;
      commit('SET_SNACKBAR', snackbar);
    }
  },

  modules: {
  }
})
