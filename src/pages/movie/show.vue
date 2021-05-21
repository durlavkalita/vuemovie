<template>
    <div class="movie-info border-b border-gray-800 text-white" :style="{ backgroundImage: 'url('+backdrop+')' }">
        <div style="background-color: rgba(0,0,0,0.5)">
        <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
            <div class="flex-none">
                <img :src="'https://image.tmdb.org/t/p/w500/' + moviePoster" :alt="movie['title']" class="w-64 md:w-96">
            </div>
            <div class="md:ml-24">
                <div class="text-4xl font-semibold">{{ movie['title'] }}</div>
                <div class="flex flex-wrap items-center">
                    <i class="fas fa-star text-yellow-600"></i>
                    <span class="ml-1">{{ movie['vote_average'] }}</span>
                    <span class="mx-2">|</span>
                    <span>{{ movie['release_date'] }}</span>
                    <span class="mx-2">|</span>
                    <span v-for="genre in movie['genres']" :key="genre.id">
                        {{ genre.name }},
                    </span>
                    <span class="mx-2">|</span>
                    <span>{{ movie['runtime'] }} minutes</span>
                </div>
                <div class="text-xl font-semibold mt-16">Overview</div>
                <p class="mt-2 text-md">
                    {{ movie['overview'] }}
                </p>
                <div class="mt-8">
                    <div class="grid grid-cols-3 mt-4">
                        <div class="mr-8 mb-4" v-for="crew in movieCrew.slice(0,9)" :key="crew">
                            <div class="font-semibold text-lg">{{ crew['name'] }}</div>
                            <div class="text-sm">{{ crew['job'] }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="container mx-auto px-4 pt-16">
        <div class="casts">
            <h2 class="tracking-wider text-black text-2xl font-bold">
                Top Casts
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
                <div class="mt-8" v-for="cast in movieCast.slice(0,7)" :key="cast">
                    <a href="#">
                        <img :src="'https://image.tmdb.org/t/p/w300' + cast['profile_path']" alt="actors" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="#" class="text-lg mt-2 hover:text-gray-300">{{ cast['name'] }}</a>
                        <div class="text-sm text-gray-400">{{ cast['character'] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="movie-images">
        <div class="container mx-auto px-4 py-16">
            <h2 class="tracking-wider text-black text-2xl font-bold">
                Images
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div class="mt-8" v-for="image in movieImages" :key="image">
                        <a href="#">
                            <img :src="'https://image.tmdb.org/t/p/w500/' + image['file_path']" alt="image1" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['id'],
    data() {
        return {
            isOpen: false,
        }
    },
    computed: {
        ...mapGetters(['movie', 'movieImages', 'movieCast', 'movieCrew', 'movieBackdrop', 'moviePoster']),
        backdrop() {
            return 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/' + this.movieBackdrop;
        },
    },
    methods: {
        ...mapActions(['fetchMovie'])
    },
    created() {
        this.fetchMovie(this.id);
    },
}
</script>

<style>

</style>