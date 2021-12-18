<template>
    <div class="card mb-3" style="max-width: 750px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="imagePath + movie.poster_path" class="img-fluid rounded-start" alt="#">
    </div>
   <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
      <div class="card-text">{{movie.overview}}</div>
        <div class="card-text">{{movie.release_date}}</div>
        <div class="d-flex flex-row">
          <div v-for="(genre,index) in movie.genres" :key="index">
           {{genre.name}}
          </div>
        </div>
        <div class="d-flex flex-row">
          <div v-for="(company,index) in movie.production_companies" :key="index">
           {{company.name}}
          </div>
        </div>
        <div class="card-text">{{movie.tagline}}</div>
        <div class="card-text">{{movie.adult}}</div>
        <div class="card-text">{{movie.vote_average}}</div>
        <div class="card-text">{{movie.original_language}}</div>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> 
</template>

<script>
export default {
  props:["movie"],
  data(){
    return{
      imagePath : process.env.VUE_APP_BASE_IMAGE_PATH,
    }
  },
}
</script>

