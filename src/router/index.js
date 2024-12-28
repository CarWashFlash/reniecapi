import { createRouter, createWebHistory } from 'vue-router'; 
import HomePage from '../views/Home.vue'; 
import PrincipalPage from '../views/Principal.vue';  
import RucPage from '../views/Ruc.vue';
import PlacaPage from '../views/Placa.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/principal',
    name: 'Principal',
    component: PrincipalPage,
  },
  {
    path: '/ruc',
    name: 'Ruc',
    component: RucPage,
  },
  {
    path: '/placa',
    name: 'Placa',
    component: PlacaPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes, 
});

export default router;
