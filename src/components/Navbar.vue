<template>
<div class="bg-indigo-900 text-white">
  <nav class="border-b border-gray-800">
    <div class="container mx-auto flex-col md:flex-row flex items-center justify-between py-4">
        <ul class="flex flex-col md:flex-row items-center">
            <li>
                <router-link to="/" class="flex items-center">
                    <span class="text-lg ml-1">VueMovie</span>
                </router-link>
            </li>
            <li class="md:ml-16 mt-3 md:mt-0">
                <router-link :to="{name: 'movie-index'}" class="hover:text-gray-300">Movies</router-link>
            </li>
            <li class="md:ml-6 mt-3 md:mt-0">
                <router-link :to="{name: 'tv-index'}" class="hover:text-gray-300">TV Shows</router-link>
            </li>
            <li class="md:ml-6 mt-3 md:mt-0">
                <a href="" class="hover:text-gray-300">Actors</a>
            </li>
        </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>