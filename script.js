let todo = JSON.parse(
  localStorage.getItem("todo") || [
    {
      name: "",
      date: "",
    },
  ]
);
function EnteR(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
function Worker() {
  let TH = "";
  for (let i = 0; i < todo.length; i++) {
    const todobj = todo[i];
    const { name, date } = todobj;
    const html = `
    <div class="todo-item">${name}</div>
    <div class="todo-item">${date}</div>
    <button class="delete-button btn  " onclick="todo.splice(${i}, 1); Worker()">Delete</button>`;
    TH += html;
  }
  document.querySelector(".in").innerHTML = TH;
}
function addTodo() {
  const inputElement = document.querySelector(".show-case");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".ds");
  const date = dateInputElement.value;
  todo.push({
    name,
    date,
  });
  inputElement.value = "";
  Worker();
  saveloads();
}
function saveloads() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

Worker();
const originalConsoleError = console.error;
console.error = (...args) => {
  if (!args[0].includes("interest-cohort")) {
    originalConsoleError(...args);
  }
};
