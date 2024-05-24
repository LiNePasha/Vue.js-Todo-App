import { mount } from '@vue/test-utils';
import TodoTask from '@/components/TodoTask.vue';

describe('TodoTask', () => {
  it('renders task text correctly', () => {
    const task = {
      id: 1,
      text: 'Test Task',
      priority: 'medium',
      completed: false
    };
    const wrapper = mount(TodoTask, {
      propsData: {
        task: task
      }
    });
    expect(wrapper.find('.task-text span').text()).toBe(task.text);
  });

  it('emits toggle-task event when checkbox is clicked', async () => {
    const task = {
      id: 1,
      text: 'Test Task',
      priority: 'medium',
      completed: false
    };
    const wrapper = mount(TodoTask, {
      propsData: {
        task: task
      }
    });
    await wrapper.find('input[type="checkbox"]').setChecked();
    expect(wrapper.emitted('toggle-task')).toBeTruthy();
    expect(wrapper.emitted('toggle-task')[0][0]).toBe(task);
  });

  it('emits delete-task event when delete button is clicked', async () => {
    const task = {
      id: 1,
      text: 'Test Task',
      priority: 'medium',
      completed: false
    };
    const wrapper = mount(TodoTask, {
      propsData: {
        task: task
      }
    });
    await wrapper.find('.delete-task').trigger('click');
    expect(wrapper.emitted('delete-task')).toBeTruthy();
    expect(wrapper.emitted('delete-task')[0][0]).toBe(task);
  });

  it('computes priorityStyle correctly based on task priority', () => {
    const task = {
      id: 1,
      text: 'Test Task',
      priority: 'high',
      completed: false
    };
    const wrapper = mount(TodoTask, {
      propsData: {
        task: task
      }
    });
    expect(wrapper.vm.priorityStyle).toEqual({ backgroundColor: '#f2696e' });
  });
});
