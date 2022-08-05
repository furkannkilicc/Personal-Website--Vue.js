import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import PrimeVue from 'primevue/config';
import router from './router.js';



import Button from 'primevue/button';



const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);



app.component('Button',Button);

app.mount('#app');