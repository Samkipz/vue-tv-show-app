<template>
    <div class="video-detail">
        <div class="movie-title">{{ video.name }}</div>
        <div class="movie-row">
            <div class="movie-player">
                <video-player ref="videoPlayer" :options="playerOptions"></video-player>
            </div>
            <div class="movie-info">
                <h4> {{ video.name }}</h4>
                <h4> {{ video.description }}</h4>
            </div>
        </div>



    </div>

</template>

<script>
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
                playbackRates: [0.7, 1.0, 1.5],
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
        VideoPlayer
    }
}

</script>


<style lang="scss" scoped>
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
        text-align: start;
    }

    & .movie-row {
        display: flex;
        flex-wrap: wrap;
        gap: 3vmin;

        & .movie-player {
            height: 60vh;
            width: 60vw;
            border: 1px solid black;
        }

        /* Change styles form style on large screen 900px and above*/
        @media screen and (max-width: 600px) {
            .movie-player {
                width: 100vw;
            }
        }
    }
}
</style>
