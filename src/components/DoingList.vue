<template>
  <div class="todo-list">
    <div class="todo-column" v-for="(month, index) in months" :key="index">
      <div class="todo-task-header">
        <h2>{{ month }}</h2>
        <span class="add-task-btn" @click="showModalForMonth(month)">+</span>
      </div>
      <div class="task-list">
        <TodoTask
          v-for="task in filteredTasks(month)"
          :key="task.id"
          :task="task"
          @toggle-task="toggleTask(month, task)"
          @delete-task="deleteTask(month, task)"
        />
      </div>
    </div>
    <div v-if="showModal" class="modal-bg">
      <div class="modal">
        <AddTask :month="selectedMonth" @task-added="hideModal" @close="hideModal" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddTask from './AddTask.vue';
import TodoTask from './TodoTask.vue';

export default {
  name: 'DoneList', // Ensure the component name matches your router configuration
  components: {
    AddTask,
    TodoTask,
  },
  data() {
    return {
      showModal: false,
      selectedMonth: '', // Track selected month for adding tasks
    };
  },
  computed: {
    ...mapState(['tasks']),
    months() {
      return Object.keys(this.tasks);
    },
    filteredTasks() {
      return month => {
        return this.tasks[month].filter(task => !task.completed);
      };
    },
  },
  methods: {
    toggleTask(month, task) {
      this.$store.commit('toggleTask', { month, task });
    },
    deleteTask(month, task) {
      this.$store.commit('deleteTask', { month, task });
    },
    showModalForMonth(month) {
      this.selectedMonth = month;
      this.showModal = true;
    },
    hideModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  background-color: #F8F8FA;
}

.todo-column {
  flex: 1;
  padding: 20px;
  position: relative;
  min-width: 250px; /* Minimum width for each column */
}

/* Media query for screens smaller than 1024px */
@media (max-width: 1024px) {
  .todo-list {
    justify-content: center;
  }

  .todo-column {
    flex: 1 1 calc(50% - 40px); /* Two columns */
    max-width: calc(50% - 40px);
  }
}

/* Media query for screens smaller than 768px */
@media (max-width: 768px) {
  .todo-column {
    flex: 1 1 calc(100% - 40px); /* Single column */
    max-width: calc(100% - 40px);
  }
}

.todo-task-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: #69727a;
}

.task-list {
  margin-top: 10px;
}

.add-task-btn {
  color: #525659;
  font-size: 30px;
  font-weight: bolder;
  cursor: pointer;
}

.add-task-btn:focus {
  outline: none;
}

.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
