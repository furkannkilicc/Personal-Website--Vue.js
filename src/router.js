import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        // component: App,
        // children: [
            // {
            //     path: '',
            //     name: 'homepage',
            //     component: () => import('./components/HomePage.vue')
            // },]
        //     {
        //         path: '/fullcalendar',
        //         name: 'FullCalendar',
        //         component: () => import('./components/FullCalendar.vue')
        //     }

        // ]
    
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('./components/Projects.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./components/Contact.vue')
    },
    {
        path: '/publications',
        name: 'publications',
        component: () => import('./components/Publications.vue')
    },
    ];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
