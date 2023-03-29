import Vue from 'vue';
import Router from 'vue-router';
import TaskList from '../components/TaskList.vue';
import TaskDetails from '../components/TaskDetails.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'TaskList',
        component: TaskList,
    },
    {
        path: '/tasks/:id',
        name: 'TaskDetails',
        component: TaskDetails,
    },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
