<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <Jumbotron />
        <h2>Popular Movies</h2>
        <div class="row">
            <div class="d-flex flex-wrap">
                <div v-for="(movie,index)  in movies.results" :key="index" >
                    <CardItem :movie="movie" />
                </div>
            </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/views/home/Jumbotron";
import CardItem from "@/views/home/CardItem";
import { mapActions,mapState } from "vuex";
export default {
    components:{
        Jumbotron,
        CardItem
    },

     methods: {
    ...mapActions(["getMovies"]),
   },

     computed:{
    ...mapState(["movies"]),

     },

    created(){
      this.getMovies();
      
    }
}
</script>
