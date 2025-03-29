import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Diary from '../views/Diary.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/diary', component: Diary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;