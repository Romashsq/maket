const inputName = document.getElementById('nameInput')
const inputAge = document.getElementById('ageInput')
const button = document.getElementById('button')
const result = document.getElementById('result')
const ArrForPeople = document.getElementById('userList')
const buttonForArray = document.getElementById('buttonForSendArray')

let user = {}
const people = [];
function write(){

    button.addEventListener("click", (e) =>{
        e.preventDefault()

        const name = inputName.value.trim()
        const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const age = inputAge.value.trim()

        if(!name || !isNaN(name) || name.trim() === ""){
            result.textContent = `Введите имя!`
            result.style.color = "red"
        }
        else if(!age || isNaN(age) || age.trim() === ""){
            result.textContent = `Введите возраст!`
            result.style.color = "red"
        }
        else {
            result.textContent = `Ваше имя - ${formatName} AND Ваш возраст - ${age} лет`
            result.style.color = "green"
        }

    })
}

function sendInArr(name, age){

    if(!name || !age){
        ArrForPeople.insertAdjacentHTML("beforeend",
        `
      <div class="bg-red-100 border border-red-300 rounded-xl p-3 shadow-sm w-64 text-center">
        <p class="text-red-600 font-medium">⚠️ Введи имя или возраст</p>
      </div>
        `
        )
    return
    }
    const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const person = {
        name: formatName,
        age: age.trim()
    }

    people.push(person)

    ArrForPeople.innerHTML = people.map((p, i) =>  `<div class="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-sm w-64 text-center">
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
    write()
    sendInArr()
}

allFuncs()