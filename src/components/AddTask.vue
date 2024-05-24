<template>
  <div class="add-task">
    <form @submit.prevent="addTask">
      <input v-model="taskText" placeholder="Enter task" />
      <select v-model="taskPriority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Task</button>
      <button type="button" @click="$emit('close')">Close</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['month'],
  data() {
    return {
      taskText: '',
      taskPriority: 'medium',
    };
  },
  methods: {
    addTask() {
      // validation to ensure that the to-do text is not empty
      if (this.taskText.trim()) {
        const newTask = {
          id: Date.now(),
          text: this.taskText,
          priority: this.taskPriority,
          completed: false,
        };
        this.$store.commit('addTask', { month: this.month, task: newTask });
        this.$emit('task-added');
        this.taskText = '';
      }
    },
  },
};
</script>

  
  <style scoped>
  .add-task {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    align-items: center;
  }
  
  input,
  select,
  button {
    margin-right: 10px;
  }
  
  button {
    cursor: pointer;
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 8px 20px;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #45a049;
  }

  .close-btn {
  cursor: pointer;
  font-size: 24px;
}
  </style>
  