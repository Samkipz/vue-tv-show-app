import { createStore } from 'vuex'
import Api from '@/service/api'



export default createStore({
  state: {
    videos: [],
    addedToFavourites: []
  },
  getters: {
  },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_FAVOURITED_VIDEOS(state, addedToFavourites) {
      state.addedToFavourites = addedToFavourites;
    },
    ADDED_VIDEO_TO_FAV(state, videoId) {
      let addedToFavourites = state.addedToFavourites.concat(videoId)
      state.addedToFavourites = addedToFavourites;
      window.localStorage.addedToFavourites = JSON.stringify(addedToFavourites)
    },
    ADD_VIDEO(state, video) {
      let videos = state.videos.concat(video);
      state.videos = videos;
    }
  },
  actions: {
    async loadVideos({ commit }) {
      let response = await Api().get('/videos');
      commit('SET_VIDEOS', response.data);
      let addedToFavourites = JSON.parse(window.localStorage.addedToFavourites)
      commit('SET_FAVOURITED_VIDEOS', addedToFavourites);
    },
    addFav({ commit }, videoId) {
      commit('ADDED_VIDEO_TO_FAV', videoId)
    },
    async createVideo({ commit }, video) {
      let response = await Api().post('/videos', video)
      let addedVideo = response.data
      commit('ADD_VIDEO', addedVideo);
      return addedVideo
    }
  },

  modules: {
  }
})
