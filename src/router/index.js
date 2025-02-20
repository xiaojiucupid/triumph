import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>import('@/views/Layout.vue'),
    children:[

      {
        path: '/about',
        name: 'about',
        component: ()=>import('@/views/AboutUs.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: ()=>import('@/views/HomePage.vue'),
      },
    ]
  },  
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/LoginRegister.vue'),
  },
  {
    path: '/resources',
    name: 'resources',
    component:()=>import('@/views/ResourcePage.vue'),
  },
  {
    path: '/analyse',
    name: 'analyse',
    component:()=>import('@/views/AnalysePage.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component:()=>import('@/views/ProductPage.vue'),
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
