import { createRouter, createWebHistory } from 'vue-router'
import MovieIndex from '../pages/movie/index.vue';
import MovieShow from '../pages/movie/show.vue';
import TvIndex from '../pages/tv/index.vue';


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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
