document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("new-task-description");
    const taskText = input.value.trim();
    const priority = document.getElementById("priority").value;

    if (!taskText) return; // Don't add empty tasks

    const li = document.createElement("li");
    li.textContent = taskText;

    // Set priority color
    if (priority === "high") {
      li.style.color = "red";
    } else if (priority === "medium") {
      li.style.color = "orange";
    } else {
      li.style.color = "green";
    }

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    form.reset();
  });
});