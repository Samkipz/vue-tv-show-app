<template>

    <!-- {{ videos }} -->
    <v-container class="grey lighten-5">

        <v-row class="d-flex justify-space-between" lign="center">
            <v-col class="d-flex align-end">
                <div class="text-h5 text-decoration-underline mb-1">All Videos</div>
            </v-col>
            <v-col>
                <v-btn class="ma-2" color="orange-darken-2" to="/video/new">
                    <v-icon start :icon="icons.mdiPlusCircle"></v-icon>
                    Add Video
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="admin-videos-row">
            <table>
                <tr>
                    <th>Video</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>

                <tr v-for="video in videos" :key="video.id">
                    <td> {{ video.name }}</td>
                    <td> {{ video.description ? video.description.slice(0, 50) : video.description }}</td>
                    <td class="d-flex flex-column flex-md-row justify-space-between flex-wrap">
                        <div class="d-flex justif-start align-center text-success">
                            <router-link :to="{ name: 'video-details', params: { id: video.id } }">View</router-link>
                        </div>
                        <div><router-link :to="{ name: 'video-edit', params: { id: video.id } }">
                                <v-btn dense x-small color="normal" class="d-flex justif-start my-2">
                                    <v-icon :icon="icons.mdiPencil" left />Edit
                                </v-btn></router-link>
                        </div>
                        <div>
                            <v-btn icon rounded class="d-flex justif-start" @click="deleteVideo(video)">
                                <v-icon :icon="icons.mdiDelete" />
                            </v-btn>
                        </div>
                    </td>
                </tr>
            </table>
        </v-row>
    </v-container>

</template>

<script>

import { mapState } from 'vuex';
import { mdiDelete, mdiPencil, mdiPlusCircle } from '@mdi/js'

export default {
    data() {
        return {
            icons: {
                mdiDelete,
                mdiPencil,
                mdiPlusCircle
            }
        }
    },
    computed: {
        ...mapState(['videos']),
        // videos:['videos']
        desc(text) {
            return text.slice(0, 50);
        }
    },
    methods: {
        deleteVideo(video) {
            let accept = confirm(`Are you sure you want to delete ${video.name}?`)
            if (accept) {
                this.$store.dispatch('deleteVideo', video)
                this.$store.dispatch('setSnackbar', {
                    showing: true,
                    text: `${video.name} Sucessfully deleted`
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.admin-videos-row {
    flex-direction: column;
    justify-content: center;
    margin-top: 2%;

}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    border-style: inset;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>