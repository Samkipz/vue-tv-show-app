<template>
    <div class="movie-list">

        <v-container class="grey lighten-5" fluid>
            <v-row class="d-flex">
                <v-col hover v-for="video in videos" :key="video.id" cols="12" sm="4" md="3">
                    <router-link :to="{ name: 'video-details', params: { id: video.id } }">
                        <v-hover v-slot="{ hover }">
                            <v-card hover :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">

                                <v-img height="200" cover :src="video.thumbnail"></v-img>

                            </v-card>
                        </v-hover>
                        <div class="text-h6 mb-1 font-weight-medium text-center">
                            {{ video.name }}
                        </div>
                    </router-link>
                </v-col>

            </v-row>
        </v-container>

    </div>
</template>

<script>

export default {
    computed: {
        videos() {
            return this.$store.state.videos
        }
    }
}

</script>

<style lang="scss" scoped>
.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;



    @media screen and (max-width: 600px) {
        & .v-col {
            border: 1px solid red;
            display: flex;
            justify-content: center;
        }
    }

    & .v-card {
        display: flex !important;

        & :hover {
            transition: opacity .4s ease-in-out;
            opacity: 0.8;
        }
    }

    @media screen and (max-width: 600px) {
        .v-card {
            // width: 60vw;
            justify-content: center;
        }
    }
}
</style>