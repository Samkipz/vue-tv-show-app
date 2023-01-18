<template>
    <div class="movie-list">
        <div v-for="video in videos" :key="video.id" class="movie-item">
            <router-link :to="{ name: 'video-details', params: { id: video.id } }">
                <div class="video-img">
                    <img :src="video.thumbnail" class="movie-item-img" alt="movie avatar" />
                    <!-- <img :src="require(video.thumbnail)" class="movie-item-img" alt="movie avatar"> -->
                    <!-- <img src="../assets/images/cytonn.png" class="movie-item-img" alt="movie avatar" />
                <img :src="require(`../../assets/${image}.svg`)"> -->
                </div>

                <div class="video-name">
                    <h4> {{ video.name }} </h4>
                </div>

                <div class="video-tag"> Video tag</div>
            </router-link>
        </div>
        <!-- <img src="../assets/images/cytonn.png" class="movie-item-img" alt="movie avatar"> -->

    </div>
</template>

<script>

export default {
    mounted() {
        this.$store.dispatch('loadVideos');
    },
    methods: {
    },
    computed: {
        videos() {
            return this.$store.state.videos
        }
    }
}

</script>

<style lang="scss">
.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2vmin;
}

.movie-item {
    // display: flex;
    height: 50vmin;
    // padding: 5vmin;
    width: 90%;
    border: 1px solid grey;
    text-align: center;
    padding: 0.5vmin 0;

    & .video-img {
        height: 70%;
        width: 100%;
    }

    & .video-name {
        height: 10%;
        width: 100%;
    }

    & .video-tag {
        height: 10%;
        width: 100%;
    }

    & .movie-item-img {
        height: 100%;
        width: 100%;
    }
}

/* Change styles form style on large screen 900px and above*/
@media screen and (min-width: 600px) {
    .movie-item {
        width: 50%;
    }
}

/* Change styles form style on large screen 900px and above*/
@media screen and (min-width: 900px) {
    .movie-item {
        width: 20%;
        flex-direction: row;
    }
}
</style>