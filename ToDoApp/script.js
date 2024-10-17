document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskInputField = document.createElement('input');
    taskInputField.type = 'text';
    taskInputField.value = taskText;
    taskInputField.disabled = true;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn'; // Add this class
    editBtn.innerText = 'Edit';

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    editBtn.addEventListener('click', () => {
        if (taskInputField.disabled) {
            taskInputField.disabled = false;
            editBtn.innerText = 'Save';
        } else {
            taskInputField.disabled = true;
            editBtn.innerText = 'Edit';
        }
    });

    taskItem.appendChild(taskInputField);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
