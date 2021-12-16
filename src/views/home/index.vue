<template>
    <div class="home">
        <h2>Home</h2>
        <router-link :to="{ name: 'AboutPage' }">
        <button class="btn btn-success">Go About</button>
         </router-link>
    </div>
</template>