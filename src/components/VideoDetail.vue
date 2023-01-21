<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-center">
                <h3> {{ video.name }}</h3>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <!-- <v-col class="sm-12 md-9 d-flex justify-center">


                <video-player ref="videoPlayer" :options="playerOptions"></video-player>
            </v-col> -->
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

export default {
    props: {
        video: Object
    }
}
</script>