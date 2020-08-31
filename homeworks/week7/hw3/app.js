/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */

document.addEventListener('DOMContentLoaded', () => {
  const inputBar = document.getElementById('input-bar');
  const addBtn = document.getElementById('add');
  const search = document.getElementById('search');
  const displaySection = document.querySelector('.lists-display');
  const clearAll = document.getElementById('clear-all');

  function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  function addTaskToLists(task) {
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('full-width');

    const checkBox = document.createElement('input');
    checkBox.classList.add('check');
    checkBox.type = 'checkbox';
    const taskText = document.createElement('div');
    taskText.classList.add('list-text');
    taskText.innerText = task;

    const iconContainer = document.createElement('div');

    const editIcon = document.createElement('i');
    editIcon.classList = 'fas fa-edit edit-item';
    const deleteIcon = document.createElement('i');
    deleteIcon.classList = 'fas fa-trash-alt 2x delete-item';

    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskText);
    listDiv.appendChild(taskDiv);
    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);
    listDiv.appendChild(iconContainer);
    displaySection.appendChild(listDiv);
  }

  function displayTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach((task) => {
      addTaskToLists(task);
    });
  }
  displayTasks();

  function storeTaskInLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.every((task, index) => {
      if (taskItem.textContent === task) {
        tasks.splice(index, 1);
        return 0;
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function deleteTask(e) {
    if (e.target.classList.contains('delete-item')) {
      if (confirm('確定要刪除嗎?')) {
        const list = e.target.parentElement.parentElement;
        list.remove();
        const listText = e.target.parentElement.parentElement.firstElementChild.lastElementChild;
        removeTaskFromLocalStorage(listText);
      }
    }
  }

  function searchTask() {
    const searchItem = inputBar.value.toLowerCase();
    const lists = Array.from(document.getElementsByClassName('list-text'));
    lists.forEach((list) => {
      const listTxt = list.textContent;
      if (listTxt.toLowerCase().indexOf(searchItem) !== -1) {
        list.parentElement.parentElement.style.display = 'flex';
      } else {
        list.parentElement.parentElement.style.display = 'none';
      }
    });
  }


  function clearAllTasks() {
    const lists = Array.from(document.getElementsByClassName('list'));
    const tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    lists.forEach((list) => {
      list.remove();
    });
  }

  function cancelCheckState(checkBox) {
    if (checkBox.classList.contains('check')) {
      checkBox.checked = false;
      checkBox.nextElementSibling.classList.toggle('strikethrough');
    }
  }

  function editTask(e) {
    if (e.target.classList.contains('edit-item')) {
      // eslint-disable-next-line prefer-const
      e.target.classList.remove('edit-item');
      e.target.classList.add('editing');
      const text = e.target.parentElement.previousElementSibling.lastElementChild.textContent;
      const parent = e.target.parentElement.previousElementSibling;
      cancelCheckState(parent.firstElementChild);
      const child = e.target.parentElement.previousElementSibling.lastElementChild;
      child.remove();
      const newChild = document.createElement('input');
      newChild.classList.add('list-text');
      newChild.type = 'text';
      newChild.value = text;
      parent.appendChild(newChild);
    } else if (e.target.classList.contains('editing')) {
      const editIcons = Array.from(document.getElementsByClassName('fa-edit'));
      let editingTextIndex;
      editIcons.forEach((icon, idx) => {
        if (icon.classList.contains('editing')) {
          editingTextIndex = idx;
        }
      });
      const newText = e.target.parentElement.previousElementSibling.lastElementChild.value;
      const parent = e.target.parentElement.previousElementSibling;

      const child = e.target.parentElement.previousElementSibling.lastElementChild;
      child.remove();
      const newChild = document.createElement('div');
      newChild.classList.add('list-text');
      newChild.textContent = newText;
      parent.appendChild(newChild);
      const tasks = getTasksFromLocalStorage();
      tasks[editingTextIndex] = newText;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      e.target.classList.remove('editing');
      e.target.classList.add('edit-item');
    }
  }


  addBtn.addEventListener('click', () => {
    const task = inputBar.value;
    addTaskToLists(task);
    storeTaskInLocalStorage(task);
  });

  search.addEventListener('click', () => {
    searchTask();
  });

  clearAll.addEventListener('click', () => {
    clearAllTasks();
  });

  displaySection.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-item')) {
      if (e.target.previousElementSibling.classList.contains('editing')) {
        alert('請編輯完再刪除!');
      } else {
        deleteTask(e);
      }
    }
  });
  displaySection.addEventListener('click', (e) => {
    if (e.target.classList.contains('check')) {
      e.target.nextElementSibling.classList.toggle('strikethrough');
    }
  });


  displaySection.addEventListener('click', (e) => {
    editTask(e);
  });
});
