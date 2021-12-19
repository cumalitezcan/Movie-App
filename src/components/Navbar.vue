<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd">
    <div class="container-fluid">
      <router-link :to="{ name: 'HomePage' }">
        <a class="navbar-brand border" style="margin-left:250%"><i class="fas fa-hat-wizard fs-3"></i></a>
      </router-link>
      <form class="d-flex me-5">
        <router-link :to="{ name: 'AboutPage' }">
          <a class="navbar-brand">About</a>
        </router-link>
      </form>
    </div>
  </nav>
</template>
