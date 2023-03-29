<template>
    <div>
        <h2> {{ task.title }}</h2>
        <p> ID zadania: {{ task.id }}</p>
        <p> Status: {{ task.completed }}</p>
        <p> Opis: {{ task.description }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TaskDetails',
    data() {
        return {
            task: {},
        };
    },
    created() {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`)
            .then((response) => {
                this.task = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>
