import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import PrimeVue from 'primevue/config';
import 

const app = createApp(App);
app.mount('#app');
app.use(store);
app.use(PrimeVue);
app.use(router);
