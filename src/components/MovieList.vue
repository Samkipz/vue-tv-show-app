<template>
    <div class="movie-list">
        <div v-for="video in videos" :key="video.id">
            <router-link :to="{ name: 'video-details', params: { id: video.id } }">

                <v-card class="mx-auto my-12" max-width="374">


                    <v-img height="250" :src="video.thumbnail"></v-img>

                    <v-card-title> {{ video.name }} </v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">



                        </v-row>

                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>



                    <v-card-text>
                        <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                            <v-chip>Horror</v-chip>

                            <v-chip>Action</v-chip>

                            <v-chip>Thriller</v-chip>

                            <v-chip>Adventure</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
                </v-card>

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