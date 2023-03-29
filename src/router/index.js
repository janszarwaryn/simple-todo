import {createRouter, createWebHistory} from 'vue-router';
import TaskList from '../components/TaskList.vue';
import TaskDetails from '../components/TaskDetails.vue';

const routes = [
    {
        path: '/',
        name: 'task-list',
        component: TaskList,
    },
    {
        path: '/task/:id',
        name: 'task-details',
        component: TaskDetails,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
