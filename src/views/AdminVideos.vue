<template>

    <!-- {{ videos }} -->
    <v-container class="grey lighten-5">
        <v-row no-gutters class="d-flex flex-column admin-video-row">
            <v-col v-for=" n in videos" :key="n">

                <v-row style="border: 1px solid red">
                    <v-col> {{ n.name }}</v-col>
                    <v-col>{{ n.description.slice(0, 50) }}</v-col>
                    <v-col> Some actions</v-col>
                </v-row>


                <!-- <div v-for="i in n" :key="i">

                    <v-card class="pa-2" outlined tile>
                        {{ i }}
                    </v-card>

                </div> -->


            </v-col>
        </v-row>
    </v-container>



    <!-- <h1>Video List</h1> -->





    <!-- <v-containers>
        <h1>Video List</h1>
        <v-btn text to="/video/new">Add Video</v-btn>


        <div v-for="video in videos" :key="video.id">
            {{ video.name }}</div>
    </v-containers> -->
</template>

<script>

import { mapState } from 'vuex';

export default {
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Video Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Description', value: 'description' },
                { text: 'Actions', value: 'actions' }
            ]
        }
    },
    computed: {
        ...mapState(['videos']),
        // videos:['videos']
        desc(text) {
            return text.slice(0, 50);
        }
    },
}
</script>

<style>
.admin-video-row {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10%;

}
</style>