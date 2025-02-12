let taskInput = document.querySelector("input");
let addButton = document.querySelector(".addBtn");
let taskUl = document.querySelector("ul");
let darkBtn = document.querySelector(".darkBtn");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let form = document.querySelector(".todo-list");


addButton.addEventListener("click", addTask);

function addTask() {
    let taskLi = document.createElement("li");
    let doneInput = document.createElement("input");
    let taskSpan = document.createElement("span");

    doneInput.type = "checkbox";
    taskSpan.textContent = taskInput.value;

    taskLi.appendChild(doneInput);
    taskLi.appendChild(taskSpan);
    taskUl.appendChild(taskLi);

    doneInput.addEventListener("input", finishTask);

    taskInput.value = "";
}

function finishTask(event) {
    let status = event.target.checked;
    let parent = event.target.parentElement;

    if (status === true) {
        parent.classList.add("line-through");
    } else {
        parent.classList.remove("line-through");
    }
}

let status = 1;

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    form.classList.toggle("form-dark");
    if (status === 1) {
        darkBtn.textContent = "Light";
        status = 0;
    } else {
        darkBtn.textContent = "Dark"
        status = 1;
    }
});

