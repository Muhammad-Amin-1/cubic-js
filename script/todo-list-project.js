// // 1 вариант вариант
// const todoList = [{
//   name: 'marsho',
//   dueDate: '2022.11.11'
// }, {
//   name: 'lech',
//   dueDate: '2022.12.22'
// }];

// renderTodoList()
// function renderTodoList() {
//   let todoListHTML = "";

//   for (let i = 0; i < todoList.length; i++) {
//     const todoObject = todoList[i];
//     // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
//     const {name, dueDate} = todoObject;
//     const html =
//     `<p>
//       <div>${name}</div><div>${dueDate}</div>
//       todoList.splice(${i}, 1)
//       renderTodoList()
//       ">Delete</button>
//     </p>`;
//     todoListHTML += html;
//   }
//   console.log(todoListHTML);
//   document.querySelector(".js-todo-list").innerHTML = todoListHTML;
// }

// function addTodo() {
//   const inputElement = document.querySelector('.js-name-input');
//   const name = inputElement.value;

//   const dateInputElement = document.querySelector('.js-due-date-input');
//   const dueDate = dateInputElement.value;

//   todoList.push({
//     // name: name,
//     // dueDate: dueDate,
//     name,
//     dueDate
//   });

//   inputElement.value = '';

//   renderTodoList();
// }

// // его
const todoList = [
  {
    name: "завтрак",
    dueDate: "2022-12-22",
  },
  {
    name: "спорт",
    dueDate: "2022-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach(function (todoObject, index) {
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

/*
function renderTodoList() {
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

*/

document.querySelector(".js-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
