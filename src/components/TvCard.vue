<template>
  <div class="mt-8">
    <router-link :to="{name:'tv-show', params: {id: tv['id']}}">
        <img :src="'https://image.tmdb.org/t/p/w500/' + tv['poster_path']" class="hover:opacity-75 transition ease-in-out duration-150 rounded-md" alt="poster">
    </router-link>
    <div class="mt-2">
        <router-link :to="{name:'tv-show', params: {id: tv['id']}}" class="text-lg mt-2 hover:text-gray-300">
          {{ tv['title'] }}
        </router-link>
        <div class="flex items-center text-gray-400 text-sm mt-1">
            <i class="fas fa-star text-yellow-600"></i>
            <span class="ml-1">{{ tv['vote_average'] }}</span>
            <span class="mx-2">|</span>
            <span>{{ tv['first_air_date'] }}</span>
        </div>
        <div class="text-gray-400 text-sm">
            {{ tv['genre_ids'] }}
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    tv: Object,
  },
}
</script>

<style>

</style>