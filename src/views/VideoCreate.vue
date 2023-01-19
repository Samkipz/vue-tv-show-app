<template>


    <v-card max-width="600" class="mx-auto my-8">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card color="#00bcd4" theme="light">
                        <v-card-title class="text-h5">
                            Add New Video
                        </v-card-title>

                        <div class="d-flex flex-column justify-center">
                            <v-text-field v-model="video.name" type="text" label="Name"></v-text-field>

                            <v-textarea v-model="video.description" label="Description" required></v-textarea>

                            <v-text-field v-model="video.thumbnail" label="Thumbnail URL" required></v-text-field>

                            <v-text-field v-model="video.videoUrl" label="Video URL" required></v-text-field>

                            <v-btn color="teal darken-4" type="submit" @click="createVideo">Add Video</v-btn>
                        </div>


                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </v-card>
</template>

<script>


export default {
    data() {
        return {
            video: {}
        }
    },
    methods: {
        async createVideo() {
            console.log(this.video)
            let video = await this.$store.dispatch('createVideo', this.video)
            this.$router.push({ name: 'video-details', params: { id: video.id } });
        }
    }
}

</script>

<style>
.field {
    border: 1px solid red;
}
</style>