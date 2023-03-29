<template>
    <div class="task-details">
        <div class="task-title">{{ task.title }}</div>
        <div>
            Completed: <span :class="{'task-completed': task.completed}">{{ task.completed }}</span>
        </div>
        <div class="task-description">{{ task.description }}</div>
        <button @click="goBack">Back to List</button>
    </div>
</template>

<script>
export default {
    name: 'TaskDetails',
    props: ['id'],
    data() {
        return {
            task: {},
        };
    },
    mounted() {
        this.getTask();
    },
    methods: {
        getTask() {
            fetch(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
                .then((response) => response.json())
                .then((data) => {
                    this.task = {
                        title: data.title,
                        completed: data.completed,
                        description: 'This is a description for the task.',
                    };
                });
        },
        goBack() {
            this.$router.push({ name: 'task-list' });
        },
    },
};
</script>

<style>
.task-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    max-width: 600px;
}

.task-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
}

.task-completed {
    color: green;
    font-size: 18px;
}

.task-description {
    margin-top: 20px;
    font-size: 18px;
}
</style>
