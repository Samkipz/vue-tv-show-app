import { createStore } from 'vuex'

export default createStore({
  state: {
    videos: [
      {
        id: 1,
        name: "first movie",
        description: "first movie description",
        videoUrl: "https://static.videezy.com/system/resources/previews/000/004/675/original/REPYellowWipes_Presentation.mp4"
      },
      {
        id: 2,
        name: "second movie",
        description: "second movie description",
        videoUrl: "https://static.videezy.com/system/resources/previews/000/034/532/original/point2.mp4"
      },
      {
        id: 3,
        name: "third movie",
        description: "third movie description",
        videoUrl: "https://static.videezy.com/system/resources/previews/000/020/207/original/Awards_Show_Video_Preview.mp4"
      },
      {
        id: 4,
        name: "fourth movie",
        description: "lands of the dragons",
        videoUrl: "https://static.videezy.com/system/resources/previews/000/011/088/original/Videezy_Slideshow_05_Preview.mp4"
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
