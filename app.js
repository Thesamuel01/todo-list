const addTodoForm = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const filterForm = document.querySelector(".form-search input");

const addTodos = (event) => {
  event.preventDefault();

  const inputValue = event.target.add.value;
  const isFormBlank = inputValue.length;

  if (isFormBlank) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
     </li>`;

    event.target.reset();
  }
};

const removeElement = (event) => {
  const clickedElement = event.target;
  const isToDeleteIcon = Array.from(clickedElement.classList).includes("delete");

  if (isToDeleteIcon) {
    clickedElement.parentElement.remove();
  }
};

const filterElements = (event) => {
  const filterInput = event.target.value;
  const todosLi = todosContainer.children;

  Array.from(todosLi)
    .filter((todo) => !todo.textContent.includes(filterInput))
    .forEach((todo) => {
      todo.classList.remove("d-flex");
      todo.classList.add("hidden");
    });

  Array.from(todosLi)
    .filter((todo) => todo.textContent.includes(filterInput))
    .forEach((todo) => {
      todo.classList.remove("hidden");
      todo.classList.add("d-flex");
    });
};

addTodoForm.addEventListener("submit", addTodos);
todosContainer.addEventListener("click", removeElement);
filterForm.addEventListener("input", filterElements);
