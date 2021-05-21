<template>
  <div style="background-image: url('https://source.unsplash.com/random/2500x2000); object-fit: cover" class="py-16 px-8 text-white">
    <p class="text-5xl font-bold">Welcome.</p>
    <p class="text-3xl mb-8">Millions of movies, TV shows and people to discover. Explore now.</p>
    <input type="text" placeholder="Search for a movie, tv show, person..." class="max-w-7xl w-full py-4 px-8 rounded-full text-black">
  </div>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies">
        <h2 class="tracking-wider text-black text-2xl font-bold">
            Popular Movies
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <MovieCard v-for="movie in popularMovies" :key="movie.id" :movie="movie"/>
        </div>
    </div>

    <!-- Now Playing -->
    <div class="now-playing-movies py-24">
        <h2 class="tracking-wider text-black text-2xl font-bold">
            Now Playing Movies
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <MovieCard v-for="movie in nowPlayingMovies" :key="movie.id" :movie="movie"/>
        </div>
    </div>
</div>
</template>

<script>
import MovieCard from '../../components/MovieCard.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'MovieIndex',
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters(['popularMovies', 'nowPlayingMovies', 'genres'])
  },
  methods: {
    ...mapActions(['fetchPopularMovies', 'fetchNowPlayingMovies', 'fetchGenres'])
  },
  created() {
    this.fetchPopularMovies();
    this.fetchNowPlayingMovies();
    this.fetchGenres();
    console.log(process.env.VUE_APP_MODE);
  }
}
</script>