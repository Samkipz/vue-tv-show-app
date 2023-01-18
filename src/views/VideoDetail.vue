<template>
    <Navbar />
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
            <v-col class="d-flex justify-center">
                <h4> {{ video.description }}</h4>
            </v-col>
        </v-row>
    </v-container>





</template>

<script>
import Navbar from '@/components/Navbar.vue';
import 'video.js/dist/video-js.css'
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
    computed: {
        video() {
            return this.$store.state.videos.find(vid => parseInt(vid.id) === parseInt(this.$route.params.id))
            // return this.$store.state.videos.find(vid => parseInt(vid.id) === parseInt((this.$route.params.id)) ? alert(vid.name) : alert('Not found'))
        },
        playerOptions() {
            return {
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.5],
                controls: true,
                sources: [{
                    type: 'video/mp4',
                    src: this.video.videoUrl
                }],
                poster: "//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png"

            }
        }
    },
    components: {
        VideoPlayer,
        Navbar
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
