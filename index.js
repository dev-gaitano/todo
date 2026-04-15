
// DATE DISPLAY

const dateElement = document.getElementById("date");

if (dateElement) {
  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  dateElement.textContent = today.toLocaleDateString("en-US", options);
}
// ADD TASK FUNCTIONALITY

document.querySelectorAll(".add-task-button").forEach((button) => {
  button.addEventListener("click", function () {
    const timeBlock = this.closest(".time-block");
    const input = timeBlock.querySelector(".newTask");

    const taskText = input.value.trim();
    if (!taskText) return;

    const ul = timeBlock.querySelector(".list-group");

    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center justify-content-between";

    li.innerHTML = `
      <div class="task-content">
        <input type="checkbox" class="task-checkbox me-2">
        <span class="task-text">${taskText}</span>
      </div>
      <button class="delete-button btn btn-sm btn-danger">Delete</button>
    `;

    ul.appendChild(li);
    input.value = "";
  });
});
// DELETE + CHECKBOX (EVENT DELEGATION)

document.addEventListener("click", function (e) {

  // DELETE SINGLE TASK
  if (e.target.classList.contains("delete-button")) {
    e.target.closest("li").remove();
  }
});
// STRIKE-THROUGH ON CHECK

document.addEventListener("change", function (e) {
  if (e.target.classList.contains("task-checkbox")) {
    const li = e.target.closest("li");
    const text = li.querySelector(".task-text");

    if (e.target.checked) {
      text.style.textDecoration = "line-through";
      text.style.opacity = "0.6";
    } else {
      text.style.textDecoration = "none";
      text.style.opacity = "1";
    }
  }
});




