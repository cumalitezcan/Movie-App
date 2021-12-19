<template>
  <div class="home" style="background-color:#484545">
    <Navbar />
    <div class="container">
      <div class="row">
        <Jumbotron />
        <h3 class="text-start text-primary fw-light mb-1 mt-1 fw-bolder">Popular Movies</h3>
        <div class="row d-flex align-items-center">
          <div class="col-md-1">
            <button @click="decrement" class="btn btn-secondary"><i class="fas fa-chevron-left fs-5"></i></button>
          </div>
          <div class="col-md-10 d-flex justify-content-center">
            <div v-for="(movie, index) in getMoviesByParts[count]" :key="index">
              <CardItem :movie="movie" />
            </div>
          </div>
          <div class="col-md-1 text-end">
            <button class="btn btn-secondary"  @click="increment"><i class="fas fa-chevron-right fs-5"></i></button>
          </div>
        </div>
         <h3 class="text-start text-primary fw-light mt-1 mb-1 fw-bolder">Popular Kids Movies</h3>
        <div class="row d-flex align-items-center">
          <div class="col-md-1">
            <button @click="count2!=0 ? count2-- : count2" class="btn btn-secondary"><i class="fas fa-chevron-left fs-5"></i></button>
          </div>
          <div class="col-md-10 d-flex justify-content-center mb-2">
            <div v-for="(movie, index) in getMoviesPopulerKidsByParts[count2]" :key="index">
              <CardItem :movie="movie" />
            </div>
          </div>
          <div class="col-md-1 text-end">
            <button @click="count2 != getMoviesPopulerKidsByParts.length-1 ? count2++ : count2" class="btn btn-secondary"><i class="fas fa-chevron-right fs-5"></i></button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Jumbotron from "@/views/home/Jumbotron";
import CardItem from "@/views/home/CardItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    Navbar,
    Footer
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
    ...mapGetters(["getMoviesByParts","getMoviesPopulerKidsByParts"]),
     
  },

  created() {
    this.getMovies();
    this.getMoviesPopularKids();
  },

};
</script>
