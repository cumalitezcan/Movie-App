<template>
  <div class="movie-detail" style="background-color:	#191970;">
    <Navbar />
    <div class="container">
      <div class="row">
        <div>
          <CardDetail :movie="movie" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CardDetail from "@/views/movie-detail/CardDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mapActions,mapState } from "vuex";
export default {
  
  components: {
    CardDetail,
    Navbar,
    Footer
  },
  methods: {
    ...mapActions(["getMovieById"])
   },
   computed: {
     ...mapState(["movie"]),
  },
  created(){
    this.getMovieById(this.$route.params.id);
  }
};
</script>

<style>
html, body, #app{
  width:100%;
  height: 100%;
}

.movie-detail {
 background-image: url("../../assets/bg.jpg");
 background-color: #cccccc;
 display: flex;
 flex-direction: column;
 width: 100%;
 min-height: 100%;
 justify-content: space-between;
}
</style>


