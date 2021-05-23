import axios from 'axios'

const key = process.env.VUE_APP_TMDB_KEY;

const state = {
  popularTv: [],
  topRatedTv: [],
  genres: [],
  tv: {},
  tvPoster: '',
  tvBackdrop: ''
};

const getters = {
  popularTv: (state) => state.popularTv,
  topRatedTv: (state) => state.topRatedTv,
  tvGenres: (state) => state.tvGenres,
  tv: (state) => state.tv,
  tvPoster: (state) => state.tvPoster,
  tvBackdrop: (state) => state.tvBackdrop
};

const actions = {
  async fetchPopularTv({commit}) {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}`);
    commit('setPopularTv', res.data.results);
  },
  async fetchTopRatedTv({commit}) {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`);
    commit('setTopRatedTv', res.data.results);
  },
  async fetchTvGenres({commit}) {
    const res = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${key}`);
    commit('setTvGenres', res.data.genres);
  },
  async fetchTv({commit}, id) {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&append_to_response=credits,videos,images`);
    commit('setTv', res.data)
    commit('setTvPoster', res.data['poster_path']);
    commit('setTvBackdrop', res.data['backdrop_path']);
  }
};

const mutations = {
  setPopularTv: (state, popularTv) => {state.popularTv = popularTv},
  setTopRatedTv: (state, topRatedTv) => {state.topRatedTv = topRatedTv},
  setTvGenres: (state, tvGenres) => {state.tvGenres = tvGenres},
  setTv: (state, tv) => {state.tv = tv},
  setTvPoster: (state, tvPoster) => {state.tvPoster = tvPoster},
  setTvBackdrop: (state, tvBackdrop) => {state.tvBackdrop = tvBackdrop}
};

export default {
  state,
  getters,
  actions,
  mutations
}