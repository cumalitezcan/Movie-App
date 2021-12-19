<template>
  <nav class="navbar navbar-light" style="background-color: #000000">
    <div class="container-fluid">
      <router-link :to="{ name: 'HomePage' }">
        <a class="navbar-light" style="margin-left:250%"><i class="fas fa-hat-wizard fs-2"></i></a>
      </router-link>
      <form class="d-flex me-5">
        <router-link :to="{ name: 'AboutPage' }">
          <button class="btn btn-primary navbar-light">About</button>
        </router-link>
      </form>
    </div>
  </nav>
</template>
