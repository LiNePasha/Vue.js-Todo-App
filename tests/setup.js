import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api'; // If you're using Composition API
import { config } from '@vue/test-utils';

// Install any plugins you're using in your Vue app
Vue.use(VueCompositionApi);

// Suppress warnings about not using the Vue instance in the tests
config.showDeprecationWarnings = false;
