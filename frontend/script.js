const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const API_URL = "/api/tasks";

// GET TASKS
async function getTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();

        displayTasks(tasks);
    } catch (error) {
        console.error("Error getting tasks:", error);
    }
}

// DISPLAY TASKS
function displayTasks(tasks) {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");

        // Task title
        const taskText = document.createElement("span");
        taskText.textContent = task.title;

        if (task.completed) {
            taskText.classList.add("completed");
        }

        // Click title to complete/uncomplete
        taskText.addEventListener("click", () => {
            updateTask(task);
        });

        // Buttons container
        const buttons = document.createElement("div");

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", () => {
            editTask(task._id, task.title);
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            deleteTask(task._id);
        });

        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        li.appendChild(taskText);
        li.appendChild(buttons);

        taskList.appendChild(li);
    });
}

// ADD TASK
addTaskBtn.addEventListener("click", async () => {
    const title = taskInput.value.trim();

    if (title === "") {
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title
        })
    });

    taskInput.value = "";

    getTasks();
});

// COMPLETE / UNCOMPLETE TASK
async function updateTask(task) {
    await fetch(`${API_URL}/${task._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            completed: !task.completed
        })
    });

    getTasks();
}

// EDIT TASK
async function editTask(id, currentTitle) {
    const newTitle = prompt("Edit your task:", currentTitle);

    if (newTitle === null) {
        return;
    }

    if (newTitle.trim() === "") {
        alert("Task cannot be empty.");
        return;
    }

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: newTitle.trim()
        })
    });

    getTasks();
}

// DELETE TASK
async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    getTasks();
}

// LOAD TASKS
getTasks();