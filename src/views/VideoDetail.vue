<template>

    <v-container>
        <v-row>
            <v-col class="d-flex justify-center">
                <h3> {{ video.name }}</h3>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="sm-12 md-9 d-flex justify-center">
                <video-player ref="videoPlayer" :options="playerOptions"></video-player>
            </v-col>
            <v-col class="justify-center">
                <h4> {{ video.description }}</h4>
                <br />
                <h4 class="red--text" v-if="isFav"> added to favourites </h4>
                <h2 v-else> <v-btn @click="addFav">Add Fovourite</v-btn> </h2>
            </v-col>
        </v-row>
    </v-container>





</template>

<script>

import 'video.js/dist/video-js.css'
import VideoPlayer from '../components/VideoPlayer.vue';
import { mapState } from 'vuex';

export default {
    computed: {
        video() {
            try {
                return this.$store.state.videos.filter(vid => parseInt(vid.id) === parseInt(this.$route.params.id))
            } catch (err) {
                return null;
            }
            // return this.$store.state.videos.find(vid => parseInt(vid.id) === parseInt((this.$route.params.id)) ? alert(vid.name) : alert('Not found'))
        },
        ...mapState(['addedToFavourites', 'videos']),
        playerOptions() {
            return {
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.5],
                controls: true,
                sources: [{
                    type: 'video/mp4',
                    src: this.video.videoUrl
                }],
                poster: "//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png",
                fluid: true

            }
        },
        isFav() {
            return this.addedToFavourites.includes(this.video.id)
        }
    },
    components: {
        VideoPlayer,
    },
    methods: {
        addFav() {
            this.$store.dispatch('addFav', this.video.id)
        }
    }
}

</script>


<style lang="scss">
.video-detail {
    display: flex;
    flex-direction: column;
    padding: 1vmin 4vmin;
    margin: 1% 4%;
    height: 100vh;

    & .movie-title {
        color: red;
        font-size: 4vmin;
        font-weight: 700;
        text-align: center;
    }

    & .movie-row {
        display: flex;
        flex-wrap: wrap;
        gap: 3vmin;

        & .movie-player {
            height: 60vh;
            width: 60vw;
        }

        /* Change styles form style on large screen 900px and above*/
        @media screen and (max-width: 600px) {
            .movie-player {
                width: 100vw;
            }
        }
    }
}

.video-js {
    margin: auto;
}
</style>
