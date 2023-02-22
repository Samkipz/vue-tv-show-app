<template>

    <!-- <v-container> -->
    <v-row>
        <v-col class="d-flex justify-center">

        </v-col>
    </v-row>

    <v-row class="video-row">
        <v-col class="d-flex justify-center">
            <video-player class="mybox" ref="videoPlayer" :options="playerOptions"></video-player>
        </v-col>
    </v-row>

    <v-row class="video-details select-season ">
        <v-col cols="12" sm="4">
            <v-row align="center">
                <v-col class="d-flex">
                    <v-select :items="items" label="Season" dense solo></v-select>
                </v-col>
            </v-row>
        </v-col>


        <v-col cols="12" sm="8">
            <v-row no-gutters>
                <v-col v-for="n in 3" :key="n">
                    <a href="#">
                        <v-card class="pa-2 mx-1" tile>
                            Episode {{ n }}
                        </v-card>
                    </a>
                </v-col>
            </v-row>
        </v-col>


        <!-- <hr style="border: 2px solid red" />
        <v-divider class="mx-4 my-4" vertical style="border: 2px solid black"></v-divider> -->
    </v-row>

    <v-row class="video-details">
        <v-col class="video-summary d-flex flex-column">
            <div class="d-flex flex-row flex-wrap justify-space-between my-2" align="center">
                <div class="text-h5 mb-1">{{ video.name }}</div>
                <!-- <v-rating v-model="rating" background-color="orange lighten-3" color="orange" large></v-rating> -->

                <h6> <v-btn x-small> <v-icon :icon="icons.mdiBellAlert" left />Subscribe</v-btn>
                </h6>

                <div v-if="currentUser.user && currentUser.user.attributes.favVideos.includes(this.video.id)"><v-btn
                        elevation="1" dense color="success" @click="removeFav">
                        Added to Favourite
                    </v-btn></div>



                <h2 v-else> <v-btn @click="addFav">
                        <v-icon :icon="icons.mdiHeartOutline" left /> Add Fovourite</v-btn> </h2>
                <!-- <v-btn elevation="1" dense color="success" @click="resetValidation">
                    Added to Favourite
                </v-btn> -->
            </div>

            <p> {{ video.description }}</p>
        </v-col>

        <v-col>
            <v-card class="mx-auto my-2" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1">
                            Comments
                        </v-list-item-title>
                        <v-list-item-subtitle>No comments for this Show. Hey! Add comment</v-list-item-subtitle>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-rating half-increments hover background-color="orange lighten-3" color="orange"
                                large></v-rating>
                            <v-textarea label="Comment" required></v-textarea>
                            <v-btn outlined rounded text class="mb-4 mx-2">
                                Submit
                            </v-btn>
                        </v-form>
                    </v-list-item-content>
                </v-list-item>
            </v-card>

        </v-col>
    </v-row>
</template>

<script>

import 'video.js/dist/video-js.css'
import VideoPlayer from '../components/VideoPlayer.vue';
import { mdiBellAlert, mdiHeartOutline } from '@mdi/js'
import { mapState } from 'vuex';

export default {
    data: () => ({
        items: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
        icons: {
            mdiHeartOutline,
            mdiBellAlert
        }
    }),
    computed: {
        ...mapState(['currentUser']),
        ...mapState(['userAttributes', 'videos',]),
        video() {
            // console.log(this.videos)
            let video;
            const y = this.$store.state.videos
            if (y.length !== 0) {
                video = JSON.parse(JSON.stringify(y.find(vid => parseInt(vid.id) === parseInt(this.$route.params.id))));
            }
            else {
                return this.$store.state.videos
            }

            return video


            // return this.$store.state.videos.find(vid => parseInt(vid.id) === parseInt(this.$route.params.id))
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
                poster: this.video.thumbnail,
                // fluid: true

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
            if (this.currentUser.user) {
                this.$store.dispatch('addFav', this.video.id)
            } else {
                this.$router.push("/register")
            }
        },
        removeFav() {
            this.$store.dispatch('removeFav', this.video.id)
        }
    }
}

</script>


<style lang="scss" >
.video-row {
    // border: 1px solid red;
    // width: 100vw;

    & .mybox {
        display: flex;
        width: 90vw;
        height: 40vw;

        & .video-js {
            width: 100vw;
            height: 40vw;
        }
    }
}

.video-details {
    // border: 1px solid blue;
    padding: 0 5%;
    display: flex;
    // position: relative;

    & .video-summary {
        // border: 1px solid red;
        display: flex;
        // width: 90vw;
        // height: 40vw;
        // position: absolute;
    }
}

@media screen and (max-width: 600px) {
    .video-details {
        display: flex;
        flex-direction: column;
        // justify-content: center;
    }
}

.select-season {
    // background-color: aqua;
    border-top: 1px solid rgba(128, 128, 128, 0.744);
}
</style>
