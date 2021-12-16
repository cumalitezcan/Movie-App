<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <Jumbotron />
        <h2>Popular Movies</h2>
        <div class="row">
            <div class="d-flex flex-wrap">
                <div v-for="i in 7" :key="i" >
                    <CardItem />
                </div>
            </div>
      </div>
        <h2>Popular Movies</h2>
        <div class="row mb-5">
            <div class="d-flex flex-wrap">
                <div v-for="i in 7" :key="i" >
                    <CardItem />
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
import { mapActions } from "vuex";
export default {
    components:{
        Jumbotron,
        CardItem
    },

     methods: {
    ...mapActions(["getMovies"]),
   },

    created(){
      this.getMovies();
      
    }
}
</script>
