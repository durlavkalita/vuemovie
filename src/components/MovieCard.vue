<template>
  <div class="mt-8">
    <router-link :to="{name:'movie-show', params: {id: movie['id']}}">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie['poster_path']" class="hover:opacity-75 transition ease-in-out duration-150 rounded-md" alt="poster">
    </router-link>
    <div class="mt-2">
        <router-link :to="{name:'movie-show', params: {id: movie['id']}}" class="text-lg mt-2 hover:text-gray-300">
          {{ movie['title'] }}
        </router-link>
        <div class="flex items-center text-gray-400 text-sm mt-1">
            <i class="fas fa-star text-yellow-600"></i>
            <span class="ml-1">{{ movie['vote_average'] }}</span>
            <span class="mx-2">|</span>
            <span>{{ movie['release_date'] }}</span>
        </div>
        <div class="text-gray-400 text-sm">
            {{ movie['genres'] }}
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    movie: Object,
  },
}
</script>

<style>

</style>