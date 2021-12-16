<template>
  <div class="movie-detail">
    <div class="container">
      <div class="row">
        <h2 class="text-center">Detail</h2>
        <div class="d-flex justify-content-center">
          <CardDetail />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardDetail from "@/views/movie-detail/CardDetail";
export default {
  components: {
    CardDetail,
  },
};
</script>
