<template>
  <div class="card me-1" style="width: 14rem; height: 20rem; background-color:#8D8A8A;">
    <router-link :to="`/movie/detail/${movie.id}`">
    <img
      class="card-img-top"
      :src="imagePath + movie.backdrop_path"
      alt="Card image cap"
    />
    </router-link>
    <div class="card-body">
      <div class="mb-3">
      <h5 class="card-title text-primary" style="height:55px">{{ movie.title }}</h5>
      </div>
      <div class="text-center text-dark"><span>Release Date: </span> <span class="fw-bolder"> {{setDate}}</span> </div>
      <div class="float-end mt-2">
        <span class="badge rounded-pill bg-warning text-dark">{{
          movie.vote_average
        }}</span>
      </div>
      <div class="float-start mt-2">
        <span class="fw-bold fs-6">{{
          setAdult
        }}</span>
      </div>
      <div class="align-bottom">
        <router-link :to="`/movie/detail/${movie.id}`">
          <span class="mt-3 badge bg-primary w-100" >Go Detail</span>
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
      if(this.movie.release_date){
      let newDate = this.movie.release_date
      newDate = newDate.split("-").reverse().join("-");
      return newDate
      }
      return this.movie.release_date
    },
    setAdult(){
      let status = this.movie.adult
      if(status){
        return "Just Adult"
      }
      return "General Audience"
    }
  }
 
};
</script>

