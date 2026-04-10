document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement('li');
        li.className = 'list-group-item animate__animated animate__fadeIn';
        li.innerHTML = `
            <div class="task-info">
                <input type="checkbox" class="form-check-input task-checkbox">
                <span class="task-content">${taskText}</span>
            </div>
            <button class="btn btn-danger btn-sm delete-btn" aria-label="Delete task">
                &times;
            </button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
        taskInput.focus();

        // Event listener for completion (checkbox)
        const checkbox = li.querySelector('.task-checkbox');
        const taskContent = li.querySelector('.task-content');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskContent.classList.add('completed-text');
            } else {
                taskContent.classList.remove('completed-text');
            }
        });

        // Event listener for deletion (button)
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
