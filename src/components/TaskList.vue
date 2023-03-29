<template>
    <div class="task-list">

        <ul>
            <router-link v-for="(todo, index) in todos" :to="{ name: 'task-details', params: { id: todo.id }}"
                         :key="index">
                <li class="task">
                    <div class="task-title">{{ todo.title }}</div>
                    <div>
                        Completed: <span :class="{'task-completed': todo.completed}">{{ todo.completed }}</span>
                    </div>
                </li>
            </router-link>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'TaskList',
    data() {
        return {
            todos: [],
        };
    },
    mounted() {
        this.getTodos();
    },
    methods: {
        getTodos() {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data); //
                    this.todos = data.slice(0, 20);
                });
        },
    },
};
</script>

<style>
a {
    text-decoration: none;
    color: gray;
}

a:hover {
    text-decoration: underline;
}

.task-list {
    margin: 50px auto;
    max-width: 600px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f7f7f7;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.task-title {
    font-weight: bold;
}

.task-completed {
    color: green;
}

.task-completed.false {
    color: red;
}
</style>
