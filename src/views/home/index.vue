<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <Jumbotron />
        <h2>Popular Movies</h2>
        <div class="row">
          <div class="col-md-1">
            <button @click="decrement" class="btn btn-success btn-sm">Previous</button>
          </div>
          <div class="col-md-10 d-flex flex-wrap">
            <div v-for="(movie, index) in getMoviesByParts[count]" :key="index">
              <CardItem :movie="movie" />
            </div>
          </div>
          <div class="col-md-1 text-end">
            <button @click="increment"  class="btn btn-success btn-sm">Next</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-1">
            <button @click="count2!=0 ? count2-- : count2" class="btn btn-success btn-sm">Previous</button>
          </div>
          <div class="col-md-10 d-flex flex-wrap">
            <div v-for="(movie, index) in getMoviesByParts[count2]" :key="index">
              <CardItem :movie="movie" />
            </div>
          </div>
          <div class="col-md-1 text-end">
            <button @click="count2 != getMoviesByParts.length-1 ? count2++ : count2"  class="btn btn-success btn-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/views/home/Jumbotron";
import CardItem from "@/views/home/CardItem";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      count: 0,
      count2: 0
    };
  },
  components: {
    Jumbotron,
    CardItem,
  },

  methods: {
    ...mapActions(["getMovies","getMoviesPopularKids"]),
    decrement(){
        if(this.count != 0){
          this.count--;
      }
    },
    increment(){
        if(this.count != this.getMoviesByParts.length-1){
          this.count++;
       } 
    },
  },

  computed: {
    ...mapState(["movies","moviesPopularKids"]),
    ...mapGetters(["getMoviesByParts"]),
  },

  created() {
    this.getMovies();
    this.getMoviesPopularKids();
  },

};
</script>
