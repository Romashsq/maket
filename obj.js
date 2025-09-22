const inputName = document.getElementById("inputName")
const inputPass = document.getElementById("inputPassword")
const buttonCheckIn = document.getElementById("buttonCheckIn")
const buttonSubmit = document.getElementById("buttonSubmit")
const buttonData = document.getElementById("buttonData")
const result = document.getElementById("result")
const user = {}
const customers = []

function writeUserInArr() {
  const name = inputName.value.trim();
  const password = inputPass.value.trim();

  if (!name || !password) {
    result.insertAdjacentHTML(
    "beforeend",
    `<div class="error-msg">Введи данные</div>`)
    return
  }

  const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const user = { name: formatName, password };

  customers.push(user);

  result.innerHTML = customers
    .map(
      (user, index) => `
      <div class="success-msg">
        ${index + 1}) Ваше имя: <span>${user.name}</span>, Ваш пароль: <span>${user.password}</span>
      </div>
    `
    ).join("");
  inputName.value = "";
  inputPass.value = "";
}

buttonData.addEventListener("click", (e) => {
  e.preventDefault();
  writeUserInArr();
});
