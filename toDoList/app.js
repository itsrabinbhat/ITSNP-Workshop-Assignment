AOS.init();

const todoInput = document.getElementById("todo-input");
const todoList = document.querySelector(".todo-list");

const addTodoItem = (event) => {
  event.preventDefault();
  console.log(todoInput.value);

  const todoItem = document.createElement("li");
  todoItem.setAttribute("data-aos", "fade-right");
  todoItem.innerHTML = `<div>${todoInput.value}</div>
  <i class="fa fa-trash trash-icon"></i>`;

  todoList.insertAdjacentElement("beforeend", todoItem);

  // Adding todo list to localStorage
  let arr = [];
  if (localStorage.getItem("todoList") == null) {
    arr.push(todoInput.value);

    localStorage.setItem("todoList", JSON.stringify(arr));
  } else {
    arr = JSON.parse(localStorage.getItem("todoList"));

    arr.push(todoInput.value);

    localStorage.setItem("todoList", JSON.stringify(arr));
  }

  //Success msg
  const successMsg = document.createElement("div");
  successMsg.className = "success-msg";

  successMsg.innerText = "New todo was added successfully!";
  todoList.insertAdjacentElement("beforebegin", successMsg);

  setTimeout(() => successMsg.remove(), 1000);

  todoInput.value = "";
};

// Removing the todo item
document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("trash-icon")) {
    var result = confirm("Delete the item?");
  }

  if (result) {
    event.target.parentElement.remove();

    const delMsg = document.createElement("div");
    delMsg.className = "del-msg";

    delMsg.innerText = "Your todo was removed Successfully!";
    todoList.insertAdjacentElement("beforebegin", delMsg);

    setTimeout(() => delMsg.remove(), 1000);

    let list = JSON.parse(localStorage.getItem("todoList"));
    let todo = event.target.parentElement.children[0].textContent;

    let filteredData = list.filter(function (item) {
      //   console.log(todo);
      //   console.log(item);
      return todo !== item;
    });
    // console.log(filteredData);

    localStorage.setItem("todoList", JSON.stringify(filteredData));
  }
});

// loading data from localStorage

document.addEventListener("DOMContentLoaded", () => {
  let list = JSON.parse(localStorage.getItem("todoList"));

  list.forEach((item) => {
    const todoItem = document.createElement("li");
    todoItem.setAttribute("data-aos", "fade-right");
    todoItem.innerHTML = `<div>${item}</div>
<i class="fa fa-trash trash-icon"></i>`;

    todoList.insertAdjacentElement("beforeend", todoItem);
  });
});
