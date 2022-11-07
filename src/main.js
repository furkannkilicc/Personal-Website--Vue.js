import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import PrimeVue from 'primevue/config';
import router from './router.js';

import '/node_modules/primeflex/primeflex.css'//primeflex
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ScrollPanel from 'primevue/scrollpanel';
import Message from 'primevue/message';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);


app.component('Message',Message);
app.component('Button',Button);
app.component('InputText',InputText);
app.component('Textarea',Textarea);
app.component('ScrollPanel',ScrollPanel);



app.mount('#app');