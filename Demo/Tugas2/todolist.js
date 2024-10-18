document.getElementById('add-task').addEventListener('click', function() {
  let taskText = document.getElementById('new-task').value;

  if (taskText === '') {
      alert('Jangan kosong ya guys!');
      return;
  }

  let taskList = document.getElementById('task-list');

  let li = document.createElement('li');

  li.innerHTML = `
      <div class="task-content">
          <span class="task-text">${taskText}</span>
          <div class="button-container">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
          </div>
      </div>
  `;

  taskList.appendChild(li);

  document.getElementById('new-task').value = '';

  // Fungsi untuk menghapus task
  li.querySelector('.delete').addEventListener('click', function() {
      li.remove();
  });

  // Fungsi untuk mengedit task
  li.querySelector('.edit').addEventListener('click', function() {
      let currentTaskText = li.querySelector('.task-text').textContent;
      let newTaskText = prompt('Edit your task', currentTaskText);
      if (newTaskText) {
          li.querySelector('.task-text').textContent = newTaskText;
      }
  });
});
