<template>
    <div>
      <form @submit.prevent="updateTask">
        <input v-model="task.text" placeholder="Update task" />
        <select v-model="task.priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input v-model="task.dueDate" type="date" />
        <button type="submit">Update Task</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object,
    },
    methods: {
      updateTask() {
        this.$store.commit('updateTask', this.task);
      },
    },
  };
  </script>
  
  <style scoped>
  /* styles here */
  </style>
  