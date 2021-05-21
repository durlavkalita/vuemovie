import axios from 'axios'

const key = process.env.VUE_APP_TMDB_KEY;

const state = {
  popularMovies: [],
  nowPlayingMovies: [],
  genres: [],
  movie: {},
  movieImages: [],
  movieCast: [],
  movieCrew: [],
  moviePoster: '',
  movieBackdrop: ''
};

const getters = {
  popularMovies: (state) => state.popularMovies,
  nowPlayingMovies: (state) => state.nowPlayingMovies,
  genres: (state) => state.genres,
  movie: (state) => state.movie,
  movieImages: (state) => state.movieImages,
  movieCast: (state) => state.movieCast,
  movieCrew: (state) => state.movieCrew,
  moviePoster: (state) => state.moviePoster,
  movieBackdrop: (state) => state.movieBackdrop
};

const actions = {
  async fetchPopularMovies({commit}) {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`);
    commit('setPopularMovies', res.data.results);
  },
  async fetchNowPlayingMovies({commit}) {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`);
    commit('setNowPlayingMovies', res.data.results);
  },
  async fetchGenres({commit}) {
    const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
    commit('setGenres', res.data.results);
  },
  async fetchMovie({commit}, id) {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=credits,videos,images`);
    commit('setMovie', res.data);
    commit('setMovieImages', res.data['images']['backdrops']);
    commit('setMovieCast', res.data['credits']['cast']);
    commit('setMovieCrew', res.data['credits']['crew']);
    commit('setMoviePoster', res.data['poster_path']);
    commit('setMovieBackdrop', res.data['backdrop_path']);
  },
};

const mutations = {
  setPopularMovies: (state, popularMovies) => {state.popularMovies = popularMovies},
  setNowPlayingMovies: (state, nowPlayingMovies) => {state.nowPlayingMovies = nowPlayingMovies},
  setGenres: (state, genres) => {state.genres = genres},
  setMovie: (state, movie) => {state.movie = movie},
  setMovieImages: (state, movieImages) => {state.movieImages = movieImages},
  setMovieCast: (state, movieCast) => {state.movieCast = movieCast},
  setMovieCrew: (state, movieCrew) => {state.movieCrew = movieCrew},
  setMoviePoster: (state, moviePoster) => {state.moviePoster = moviePoster},
  setMovieBackdrop: (state, movieBackdrop) => {state.movieBackdrop = movieBackdrop},
};

export default {
  state,
  getters,
  actions,
  mutations
}