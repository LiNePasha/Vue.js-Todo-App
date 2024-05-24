import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '../components/TodoList.vue';
import DoingList from '../components/DoingList.vue';
import DoneList from '../components/DoneList.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: TodoList },
  { path: '/doing', component: DoingList },
  { path: '/done', component: DoneList },
];

export default new Router({
  mode: 'history', // Use history mode - remove #
  routes,
});
