document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskDescription = document.getElementById('new-task-description').value;
    const newTask = document.createElement('li');
    newTask.textContent = newTaskDescription;

    // THis will create a delete button for tasks
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    document.getElementById('new-task-description').value = '';
  });
});
