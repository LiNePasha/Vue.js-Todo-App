import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      // Design Data
      January: [
        {
            "id": 1716574764074,
            "text": "Set personal revenue targets",
            "priority": "high",
            "completed": true,
            "inProgress": false
        },
        {
            "id": 1716574890816,
            "text": "Outreach",
            "priority": "high",
            "completed": false,
            "inProgress": false
        },
        {
            "id": 1716575009304,
            "text": "Schedule call with Mike",
            "priority": "medium",
            "completed": true,
            "inProgress": false
        },
        {
            "id": 1716575059912,
            "text": "Customer discovery call RECAB",
            "priority": "medium",
            "completed": true,
            "inProgress": false
        }
    ],
      February: [
        {
            "id": 1716576096954,
            "text": "Book conference room",
            "priority": "high",
            "completed": true,
            "inProgress": false
        },
        {
            "id": 1716576133761,
            "text": "Prepare demo for sales on-site !",
            "priority": "high",
            "completed": false,
            "inProgress": false
        }
    ],
      March: [
        {
            "id": 1716576276050,
            "text": "[Approval required] Discount for 2 years contract",
            "priority": "high",
            "completed": false,
            "inProgress": false
        },
        {
            "id": 1716576307816,
            "text": "Outreach",
            "priority": "medium",
            "completed": true,
            "inProgress": false
        }
    ],
      April: [
        {
            "id": 1716576431191,
            "text": "Create presentation for Unicorn Corp meeting next week",
            "priority": "high",
            "completed": true,
            "inProgress": false
        },
        {
            "id": 1716576484763,
            "text": "Review client contract",
            "priority": "medium",
            "completed": true,
            "inProgress": false
        },
        {
            "id": 1716576538548,
            "text": "Review buyer personas [ Q2 UPDATE]",
            "priority": "low",
            "completed": false,
            "inProgress": false
        }
    ],
    },
  },
  mutations: {
    addTask(state, { month, task }) {
        state.tasks[month].push({
          id: Date.now(),
          text: task.text,
          priority: task.priority,
          completed: false,
          inProgress: false,
        });
      },
    toggleTask(state, { month, task }) {
      const index = state.tasks[month].findIndex(t => t.id === task.id);
      state.tasks[month][index].completed = !state.tasks[month][index].completed;
    },
    deleteTask(state, { month, task }) {
      state.tasks[month] = state.tasks[month].filter(t => t.id !== task.id);
    },
  },
});
