import { mount } from '@vue/test-utils';
import UpdateTask from '@/components/UpdateTask.vue';

describe('UpdateTask', () => {
  it('renders input fields correctly', () => {
    const task = {
      text: 'Test Task',
      priority: 'Medium',
      dueDate: '2024-05-25'
    };
    const wrapper = mount(UpdateTask, {
      propsData: {
        task: task
      }
    });
    expect(wrapper.find('input[type="text"]').element.value).toBe(task.text);
    expect(wrapper.find('select').element.value).toBe(task.priority);
    expect(wrapper.find('input[type="date"]').element.value).toBe(task.dueDate);
  });

  it('calls updateTask method and emits event when form is submitted', async () => {
    const task = {
      text: 'Test Task',
      priority: 'Medium',
      dueDate: '2024-05-25'
    };
    const wrapper = mount(UpdateTask, {
      propsData: {
        task: task
      }
    });
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted('update-task')).toBeTruthy();
    expect(wrapper.emitted('update-task')[0][0]).toBe(task);
  });
});
