function getElement(identificator) {
    return document.querySelector(identificator);
  }

  function addTodo() {
    const todoList = JSON.parse(localStorage.getItem("todos")) || [];
    const input = getElement(".todo-form__input");
    const todoText = input.value.trim();

    if (!todoText) {
      return;
    }

    const newTodo = {
      title: todoText,
      id: Date.now(),
    };

    todoList.unshift(newTodo);
    localStorage.setItem("todos", JSON.stringify(todoList));
    input.value = "";
    render(todoList);
  }

  function deleteTodo(id) {
    let todoList = JSON.parse(localStorage.getItem("todos")) || [];
    todoList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todoList));
    render(todoList);
  }

  function editTodo(id) {
    let todoList = JSON.parse(localStorage.getItem("todos")) || [];
    const newText = prompt("Edit todo:", todoList.find((todo) => todo.id === id)?.title);
    if (newText !== null) {
      todoList = todoList.map((todo) => (todo.id === id ? { ...todo, title: newText } : todo));
      localStorage.setItem("todos", JSON.stringify(todoList));
      render(todoList);
    }
  }

  function render(todoList) {
    const list = getElement(".todo-list");
    list.innerHTML = "";
    todoList.forEach((todo) => {
      const li = document.createElement("li");
      li.className = "todo-item";

      li.innerHTML = `
        <span>${todo.title}</span>
        <div>
          <button class="btn btn-edit" onclick="editTodo(${todo.id})">Edit</button>
          <button class="btn btn-delete" onclick="deleteTodo(${todo.id})">Delete</button>
        </div>
      `;

      list.appendChild(li);
    });
  }

  const form = getElement(".todo-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const todoList = JSON.parse(localStorage.getItem("todos")) || [];
    render(todoList);
  });