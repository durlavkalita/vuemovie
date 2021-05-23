<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-tv">
        <h2 class="tracking-wider text-black text-2xl font-bold">
            Popular TV Series
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <TvCard v-for="tv in popularTv" :key="tv.id" :tv="tv"/>
        </div>
    </div>

    <!-- Top Rated -->
    <div class="top-rated-tv py-24">
        <h2 class="tracking-wider text-black text-2xl font-bold">
            Top Rated Series
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <TvCard v-for="tv in topRatedTv" :key="tv.id" :tv="tv"/>
        </div>
    </div>
  </div>
</template>

<script>
import TvCard from '../../components/TvCard.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'TvIndex',
  components: {
    TvCard
  },
  computed: {
    ...mapGetters(['popularTv', 'topRatedTv', 'tvGenres'])
  },
  methods: {
    ...mapActions(['fetchPopularTv', 'fetchTopRatedTv', 'fetchTvGenres'])
  },
  created() {
    this.fetchPopularTv();
    this.fetchTopRatedTv();
    this.fetchTvGenres();
  }
}
</script>

<style>

</style>