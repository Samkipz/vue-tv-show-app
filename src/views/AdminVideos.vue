<template>
    <v-containers>
        <h1>Video List</h1>
        <v-btn text to="/video/new">Add Video</v-btn>


        <div v-for="video in videos" :key="video.id">
            {{ video.name }}</div>
    </v-containers>
</template>

<script>

import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['videos'])
    }
}
</script>