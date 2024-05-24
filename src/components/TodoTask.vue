<template>
  <div class="task">
    <div class="task-text">
      <label class="custom-checkbox">
        <input type="checkbox" :checked="task.completed" @change="onToggleTask" />
        <span class="checkmark"></span>
      </label>
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
    </div>
    <div class="task-priority">
      <span :style="priorityStyle">{{ task.priority }} Priority</span>
    </div>
    <div class="task-time">
      <div class="user-card">
  <img src="https://res.cloudinary.com/dzxbbqq4l/image/upload/v1716486165/avatar-removebg-preview_2_xmp4h7.webp" alt="User Image" class="user-image">
  <p class="user-name">Today</p>
</div>
<span class="delete-task" @click="onDeleteTask"> x </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoTask',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onToggleTask() {
      this.$emit('toggle-task', this.task);
    },
    onDeleteTask() {
      this.$emit('delete-task', this.task);
    },
  },
  computed: {
    priorityStyle() {
      // Return a style object based on task priority
      if (this.task.priority === 'high') {
        return { backgroundColor: '#f2696e' };
      } else if (this.task.priority === 'medium') {
        return { backgroundColor: '#ed8b76', color: "black" };
      } else if (this.task.priority === 'low') {
        return { backgroundColor: '#efbd6e', color: "black" };
      } else { 
        return {}; // Default style if priority is not specified
      }
    },
  },
};
</script>

<style scoped>
.task {
  margin-bottom: 20px;
  width: 90%;
  background: white;
  padding: 15px;
  border: 2px solid #EAEAEA;
  border-radius: 8px;
}

.task-priority span{
  background-color: #f2696e;
    padding: 10px;
    border-radius: 25px;
    color: white;
    margin-bottom: 15px;
    display: inline-block;
    text-transform: capitalize;
}

.task-time {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.task-text {
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-bottom: 20px;
  width: 100%;
}

.task-text > span{
  word-wrap: break-word;
  width: 80%;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.custom-checkbox input {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #888888;
  cursor: pointer;
  border-radius: 50%;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #fff;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #888888;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.user-card {
  align-items: center;
  display: flex;
  gap: 5px;
}

.user-image {
  width: 50px; 
  height: 50px;
  border-radius: 50%; 
  margin-bottom: 10px; 
  cursor: pointer;
}

.user-name {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #42b983;
}

.delete-task{
  font-size: 50px;
  cursor: pointer;
}

button {
  margin-left: 10px;
}
</style>
