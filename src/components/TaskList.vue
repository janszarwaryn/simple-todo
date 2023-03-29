<template>
    <div>
        <h1>Moje zadania</h1>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <router-link :to="{ name: 'TaskDetails', params: { id: task.id }}">
                    {{ task.title }}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TaskList',
    data() {
        return {
            tasks: [],
        };
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tasks = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>
