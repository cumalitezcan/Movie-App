import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name:"HomePage",
        path:"/",
        component:()=>import('@/views/home/index')
    },
    {
        name:"AboutPage",
        path:"/about",
        component:()=>import('@/views/about/index')
    },
    {
        name:"MovieDetailPage",
        path:"/movie/detail/:id",
        component:()=>import('@/views/movie-detail/index')
    },
  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
   
    
});


export default router;