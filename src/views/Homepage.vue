<template>
    <!-- App.vue -->

    <v-app>
        <div>
            <Navbar />
        </div>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <MovieList />
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>



    <!-- <div>
        <MovieList />
    </div> -->
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MovieList from '../components/MovieList.vue';

export default {
    name: "Home-page",
    components: {
        MovieList,
        Navbar
    }
}
</script>