const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addtask");
const newTaskInput = document.getElementById("newTask");

// ADD TASK
addBtn.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        <div>
            <input type="checkbox" class="form-check-input me-2">
            <span class="task-text">${taskText}</span>
        </div>
        <div>
            <button class="btn btn-sm btn-warning editBtn">Edit</button>
            <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    newTaskInput.value = "";
});

// HANDLE EDIT & DELETE (Event Delegation)
taskList.addEventListener("click", (e) => {

    // DELETE
    if (e.target.classList.contains("deleteBtn")) {
        e.target.closest("li").remove();
    }

    // EDIT
    if (e.target.classList.contains("editBtn")) {
        const li = e.target.closest("li");
        const span = li.querySelector(".task-text");

        const newText = prompt("Edit your task:", span.textContent);

        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
        }
    }

});