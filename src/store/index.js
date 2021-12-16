import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state:{
        movies: []
    },
    mutations: {
        setMovies(state,payload){
            state.movies = payload;
        }
    },
    actions: {
        getMovies({commit}){
            axios.get(`${process.env.VUE_APP_BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${process.env.VUE_APP_API_KEY}`).then((response) => {
              commit("setMovies", response.data);
            });
          },
    },
    getters: {},
    modules: {},
});

export default store;