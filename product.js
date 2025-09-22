    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    window.onload = function() {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      savedTasks.forEach(task => renderTask(task.text, task.completed));
    };

    function addTask() {
      const text = taskInput.value.trim();
      if (text === "") return;

      renderTask(text, false);
      saveTasks();
      taskInput.value = "";
    }

    function renderTask(text, completed) {
      const li = document.createElement("li");
      li.textContent = text;
      if (completed) li.classList.add("completed");

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
      });
      const delBtn = document.createElement("button");
      delBtn.textContent = "x";
      delBtn.className = "delete-btn";
      delBtn.onclick = () => {
        li.remove();
        saveTasks();
      };

      li.appendChild(delBtn);
      taskList.appendChild(li);
    }

    function saveTasks() {
      const tasks = [];
      document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
          text: li.firstChild.textContent,
          completed: li.classList.contains("completed")
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
