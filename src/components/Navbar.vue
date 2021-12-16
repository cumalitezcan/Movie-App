<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd">
    <div class="container-fluid">
      <router-link :to="{ name: 'HomePage' }">
        <a class="navbar-brand ms-5 border">LOGO</a>
      </router-link>
      <form class="d-flex me-5">
        <router-link :to="{ name: 'AboutPage' }">
          <a class="navbar-brand">About</a>
        </router-link>
      </form>
    </div>
  </nav>
</template>
