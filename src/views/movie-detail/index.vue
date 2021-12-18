<template>
  <div class="movie-detail">
    <div class="container">
      <div class="row">
        <h2 class="text-center">Detail</h2>
        <div class="d-flex justify-content-center">
          <CardDetail :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardDetail from "@/views/movie-detail/CardDetail";
import { mapActions,mapState } from "vuex";
export default {
  components: {
    CardDetail,
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


