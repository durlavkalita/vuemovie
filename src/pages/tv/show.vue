<template>
    <div class="movie-info border-b border-gray-800 text-white" :style="{ backgroundImage: 'url('+backdrop+')' }">
        <div style="background-color: rgba(0,0,0,0.5)">
        <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
            <div class="flex-none">
                <img :src="'https://image.tmdb.org/t/p/w500/' + tvPoster" :alt="tv['name']" class="w-64 md:w-96">
            </div>
            <div class="md:ml-24">
                <div class="text-4xl font-semibold">{{ tv['name'] }}</div>
                <div class="flex flex-wrap items-center">
                    <i class="fas fa-star text-yellow-600"></i>
                    <span class="ml-1">{{ tv['vote_average'] }}</span>
                    <span class="mx-2">|</span>
                    <span>{{ tv['first_air_date'] }}</span>
                    <span class="mx-2">|</span>
                    <span v-for="genre in tv['genres']" :key="genre.id">
                        {{ genre.name }},
                    </span>
                </div>
                <div class="text-xl font-semibold mt-16">Overview</div>
                <p class="mt-2 text-md">
                    {{ tv['overview'] }}
                </p>
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
        ...mapGetters(['tv', 'tvPoster', 'tvBackdrop']),
        backdrop() {
            return 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/' + this.tvBackdrop;
        },
    },
    methods: {
        ...mapActions(['fetchTv'])
    },
    created() {
        this.fetchTv(this.id);
    },
}
</script>

<style>

</style>