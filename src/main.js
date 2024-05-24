import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Persist the Vuex store state to local storage
store.subscribe((mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
});

const savedTasks = JSON.parse(localStorage.getItem('tasks'));
if (savedTasks) {
  store.replaceState({
    tasks: savedTasks,
  });
}

// Create and mount the Vue instance
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
