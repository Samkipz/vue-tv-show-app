<template>


    <v-container class="grey lighten-5">
        <v-row no-gutters class="pt-4 d-flex justify-center mb-6">
            <v-col class="d-flex flex-column justify-center" cols="12" sm="8">
                <v-card class="pa-2" outlined tile>
                    <v-card-title class="text-h5">
                        Add New Video
                    </v-card-title>

                    <v-form @submit.prevent>
                        <v-text-field v-model="video.name" type="text" label="Video Name" required></v-text-field>

                        <v-textarea v-model="video.description" label="Description" required></v-textarea>

                        <v-text-field v-model="video.thumbnail" label="Thumbnail URL" required></v-text-field>

                        <v-text-field v-model="video.videoUrl" label="Video URL" required></v-text-field>

                        <v-btn color="cyan" type="submit" @click="createVideo">Add Video</v-btn>

                    </v-form>

                </v-card>
            </v-col>
        </v-row>
    </v-container>


    <!-- <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
            required></v-select>

        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
            required></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
            Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
            Reset Form
        </v-btn>

        <v-btn color="warning" @click="resetValidation">
            Reset Validation
        </v-btn>
    </v-form> -->

    <!-- <v-card max-width="600" class="mx-auto my-8">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card theme="light">
                        <v-card-title class="text-h5">
                            Add New Video
                        </v-card-title>


                        <v-form>
                            <div class="d-flex flex-column justify-center">
                                <v-text-field v-model="video.name" type="text" label="Name"></v-text-field>

                                <v-textarea v-model="video.description" label="Description" required></v-textarea>

                                <v-text-field v-model="video.thumbnail" label="Thumbnail URL" required></v-text-field>

                                <v-text-field v-model="video.videoUrl" label="Video URL" required></v-text-field>

                                <v-btn color="teal darken-4" type="submit" @click="createVideo">Add Video</v-btn>
                            </div>
                        </v-form>

                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </v-card> -->
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