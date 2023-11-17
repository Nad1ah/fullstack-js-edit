document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".todo form");
  const input = document.querySelector(".todo input[type='text']");
  const taskList = document.querySelector(".todo ul");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = input.value.trim();
    taskText &&
      (taskList.innerHTML += `<li><input type="checkbox">${taskText}</li>`);
    input.value = "";
  });
});
function click() {
  document.getElementById(taskList).remove();
}
