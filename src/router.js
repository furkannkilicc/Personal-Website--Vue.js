import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        // children: [
        //     {
        //         path: '',
        //         name: 'dashboard',
        //         component: () => import('./components/Dashboard.vue')
        //     },
        //     {
        //         path: '/fullcalendar',
        //         name: 'FullCalendar',
        //         component: () => import('./components/FullCalendar.vue')
        //     }

        // ]
    
    // },
    // {
    //     path: '/projects',
    //     name: 'projects',
    //     component: () => import('./components/ChartDemo.vue')
    // },
    // {
    //     path: '/contact',
    //     name: 'contact',
    //     component: () => import('./components/ChartDemo.vue')
    // },
    // {
    //     path: '/chart',
    //     name: 'chart',
    //     component: () => import('./components/ChartDemo.vue')
    // },
    ];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
