const inputName = document.getElementById('nameInput')
const inputAge = document.getElementById('ageInput')
const button = document.getElementById('button')
const result = document.getElementById('result')
const ArrForPeople = document.getElementById('userList')
const buttonForArray = document.getElementById('buttonForSendArray')

let user = {}
const people = [];
function makeUser(){

    button.addEventListener('click', (e) =>{
        e.preventDefault()

    const name = inputName.value.trim();
    const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const age = inputAge.value.trim()

    if(!name || !isNaN(name) || name.trim() === ""){
        result.textContent = "Пошел нахуй введи имя правильно"
        result.style.color = "red"
    }

    else if(!age || isNaN(age) || age.trim() === ""){
        result.textContent = "Пошел нахуй введи возраст правильно"
        result.style.color = "red"
    } else {
        result.textContent = `Name - ${formatName} AND Age - ${age}`
        result.style.color = 'green'

    }
    

    })
}

function sendInArr(name, age){

  if(!name || !age){

    ArrForPeople.insertAdjacentHTML("beforeend",  //Если нету или имени или возраста выведет ошибку и иди нахуй типо
      `
      <div class="bg-red-100 border border-red-300 rounded-xl p-3 shadow-sm w-64 text-center">
        <p class="text-red-600 font-medium">⚠️ Введи имя или возраст</p>
      </div>
      `
    )
    return

  }

  const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() //Форматируем имя что первая буква будет Большая и остальные маленькие
  const person = { //создаем объект с персонажем 
    name: formatName,
    age: age.trim()
  }

people.push(person) // Если все четко пушим в массив наш объект 

    ArrForPeople.innerHTML = people.map((p, i) => `<div class="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-sm w-64 text-center">
        <p class="text-gray-800 font-medium">${i + 1} ${p.name}</p>
        <p class="text-gray-500 text-sm">${p.age} лет</p>
      </div>`).join("")
}


buttonForArray.addEventListener("click", (e) => {
e.preventDefault()
sendInArr(inputName.value.trim(), inputAge.value.trim())
inputName.value = ""
inputAge.value = ""

}

)

function allFuncs(){
    makeUser()
    sendInArr()
}

allFuncs()