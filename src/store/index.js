import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state:{
        movies: [],
        movie: "",
        moviesPopularKids: []
    },
    mutations: {
        setMovies(state,payload){
            state.movies = payload;
        },
        setMovie(state,payload){
            state.movie = payload;
        },
        setMoviesPopularKids(state,payload){
          state.moviesPopularKids = payload;
      },
    },
    actions: {
        getMovies({commit}){
            axios.get(`${process.env.VUE_APP_BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${process.env.VUE_APP_API_KEY}`).then((response) => {
              commit("setMovies", response.data.results);
            });
          },
        getMoviesPopularKids({commit}){
            axios.get(`${process.env.VUE_APP_BASE_URL}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${process.env.VUE_APP_API_KEY}`).then((response) => {
              commit("setMoviesPopularKids", response.data.results);
            });
          },
        getMovieById({commit},id){
            axios.get(`${process.env.VUE_APP_BASE_URL}movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`).then((response) => {
              commit("setMovie", response.data);
            });
          },
    },
    getters: {
      getMoviesByParts:(state) => {
        let newList = []
        let pieces = []

        for(let i=1;i<=state.movies.length;i++){
          pieces.push(state.movies[i-1])
          if( i % 5 == 0 && i != 0){
            newList.push(pieces);
            pieces = [];
          }
          if(i == state.movies.length+1){
            newList.push(pieces)
          }
        }
        return newList;
      },
      getMoviesPopulerKidsByParts:(state) => {
        let newList = []
        let pieces = []

        for(let i=1;i<=state.moviesPopularKids.length;i++){
          pieces.push(state.moviesPopularKids[i-1])
          if( i % 5 == 0 && i != 0){
            newList.push(pieces);
            pieces = [];
          }
          if(i == state.moviesPopularKids.length+1){
            newList.push(pieces)
          }
        }
        return newList;
      },


      
    },
    modules: {},
});

export default store;