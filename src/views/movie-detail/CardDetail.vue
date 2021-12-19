<template>
  <div class="card mb-3" style="background-color: #2e49a5">
    <div class="row g-0">
      <div class="col-md-3">
        <img
          :src="imagePath + movie.poster_path"
          class="img-fluid rounded-start"
          alt="Image Not Found"
        />
      </div>
      <div class="col-md-9 d-flex flex-column">
        <div class="card-body fw-bolder">
          <h3 class="card-title">{{ movie.title }}</h3>
          <div class="card-text fw-bolder" style="font-family: Cursive">
            {{ movie.overview }}
          </div>
          <div class="card-text mt-2">
            <span class="fa fa-star"></span> Release Date:
            <span class="fa fa-star checked"></span>{{ setDate }}
          </div>
          <div class="d-flex flex-row mt-2">
            <span class="fa fa-star"></span>
            Production Companies:
            <div v-for="(genre, index) in movie.genres" :key="index">
              <span class="fa fa-star checked"></span> {{ genre.name }}
            </div>
          </div>
          <div class="d-flex flex-row mt-2">
            <span class="fa fa-star"></span>Categories:
            <div
              v-for="(company, index) in movie.production_companies"
              :key="index"
            >
              <span class="fa fa-star checked"></span>{{ company.name }}
            </div>
          </div>
          <div class="card-text mt-2">
            <span class="fa fa-star"></span>Hashtag:
            <span class="fa fa-star checked"></span>{{ movie.tagline }}
          </div>
          <div class="card-text mt-2">
            <span class="fa fa-star"></span>Adult:<span
              class="fa fa-star checked"
            ></span>
            {{ setAdult }}
          </div>
          <div class="card-text mt-2">
            <span class="fa fa-star"></span> Point:
            <span class="fa fa-star checked"></span> {{ movie.vote_average }}
          </div>
          <div class="card-text mt-2">
            <span class="fa fa-star"></span> Original Language:
            <span class="fa fa-star checked"></span>
            {{ movie.original_language }}
          </div>
        </div>
        <div class="card-footer fw-bolder"><span>More information... </span>
          <a :href="movie.homepage"> Go to original web site</a> </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  data() {
    return {
      imagePath: process.env.VUE_APP_BASE_IMAGE_PATH,
    };
  },
  computed: {
    setDate() {
      let newDate = this.movie.release_date;
      newDate = newDate.split("-").reverse().join("-");
      return newDate;
    },
    setAdult() {
      let status = this.movie.adult;
      if (status) {
        return "Just Adult";
      }
      return "General Audience";
    },
  },
};
</script>

<style scoped>
.checked {
  color: orange;
}
img {
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
