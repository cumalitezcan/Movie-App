<template>
  <div class="card me-1" style="width: 14rem; height: 20rem">
    <img
      class="card-img-top"
      :src="imagePath + movie.backdrop_path"
      alt="Card image cap"
    />
    <div class="card-body">
      <div class="mb-3">
      <h5 class="card-title text-danger" style="height:55px">{{ movie.title }}</h5>
      </div>
      <div class="text-center text-dark">Release Date: <span class="fw-bolder"> {{setDate}}</span> </div>
      <div class="float-end mt-2">
        <span class="badge rounded-pill bg-warning text-dark">{{
          movie.vote_average
        }}</span>
      </div>
      <div class="mb-2 position-absolute bottom-0 start-50 translate-middle-x">
        <router-link :to="`/movie/detail/${movie.id}`">
          <span class="badge bg-primary" >Go Detail</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  data(){
    return{
      imagePath : process.env.VUE_APP_BASE_IMAGE_PATH,
    }
  },

  computed:{
    setDate(){
      let newDate = this.movie.release_date
      newDate = newDate.split("-").reverse().join("-");
      return newDate
    }
  }
 
};
</script>

