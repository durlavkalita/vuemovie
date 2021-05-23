import { createRouter, createWebHistory } from 'vue-router'
import MovieIndex from '../pages/movie/index.vue';
import MovieShow from '../pages/movie/show.vue';
import TvIndex from '../pages/tv/index.vue';
import TvShow from '../pages/tv/show.vue';

const routes = [
  {
    path: '/',
    name: 'movie-index',
    component: MovieIndex
  },
  {
    path: '/movie/:id',
    name: 'movie-show',
    component: MovieShow,
    props: true
  },
  {
    path: '/tv',
    name: 'tv-index',
    component: TvIndex
  },
  {
    path: '/tv/:id',
    name: 'tv-show',
    component: TvShow,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
