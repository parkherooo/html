document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('taskInput');
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('일정을 입력해주세요.');
        return;
    }
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.onclick = function() {
        li.classList.toggle('completed');
    };
	
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
	
    const dateSpan = document.createElement('span');
    const now = new Date();
    dateSpan.textContent = now.toLocaleString();
    dateSpan.className = 'date';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = function() {
        if (confirm("정말 삭제하시겠습니까??") == true){ 
            taskList.removeChild(li);
        }else{
            return;
        }
    };

    label.appendChild(checkbox);
    label.appendChild(taskText);

    li.appendChild(label);
    li.appendChild(dateSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
}
