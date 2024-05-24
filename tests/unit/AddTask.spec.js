import { mount } from '@vue/test-utils';
import AddTask from '@/components/AddTask.vue';

describe('AddTask', () => {
  it('adds a task when form is submitted', async () => {
    const wrapper = mount(AddTask);

    // Set task text and priority
    await wrapper.setData({ taskText: 'Test Task', taskPriority: 'high' });

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Assert that task was added
    expect(wrapper.emitted('task-added')).toBeTruthy();
  });

  it('does not add a task when form is submitted with empty text', async () => {
    const wrapper = mount(AddTask);

    // Set empty task text
    await wrapper.setData({ taskText: '' });

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Assert that no task was added
    expect(wrapper.emitted('task-added')).toBeFalsy();
  });
});
