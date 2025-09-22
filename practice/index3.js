// let i = 0

// while(i < 3){
//     alert("Хуй")
//     i++
// }

// let arr = [1,2,3,4,5]
// for(let i = 0; i < 5; i++){

//     alert(arr[i])

// }

// let name1 = ["roman", "david", "log", "penis"]
// let arr2 = [15,21,32,44,56]
// function enter(){

    
//     while(true){
//         let enterYourName = prompt("Введи свое имя")
        
//         if(!name1.includes(enterYourName)){
//             alert("Иди наххуй")
//             break
//         } 
//         let enterYourAge = +prompt(`Enter ypor age ${enterYourName}`)
//         if(!arr2.includes(enterYourAge)){
//             alert("Иди наххуй")
//             break
//         } 

//     }
// }

// enter()

// Counter: for(let i = 0; i < 5; i ++){
//     for(let b = 0; b < 5; b  ++){
//         let input = prompt(`Write two numbers (${i} - ${b})`)

//         if(!input) break Counter
//     }
// }

// for(i = 1; i < 25; i++){
//     if(i % 3 === 0)
    
//     alert(i)
// }

// const words = ["яблоко", "банан", "сливки", "ананас", "груши"];
// let i = 0

// while(words.length > i){
// const word = words[i]
// i++ 
//     if(word.includes("а")){
//         continue
//     }
//     alert(word)

// }


// const user = {}

// user.name = "Loh"
// user.isWorker = true


// let user = {}

// function regis(){
//     while (true) {
//         EnterYourName = prompt("Enter your name")

//         if (!EnterYourName || !isNaN(EnterYourName) || EnterYourName.trim() === "") {
//             confirm("Имя введено неправильно! Попробуй еще раз, немощь")
//         } else {
//             user.name = EnterYourName.trim()
//             break
//         }
//     }
//     while (true) {
//         const EnterYourAge = prompt("Enter your age")

//         if (!EnterYourAge || isNaN(EnterYourAge) || EnterYourAge.trim() === "" || +EnterYourAge <= 0) {
//             confirm("Возраст введён неправильно! Попробуй еще раз, немощь")
//         } else {
//             user.age = +EnterYourAge
//             break
//         }
//     }
//     user.name = EnterYourName
//     user.age = EnterYourAge

// }

// regis()


// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age
//   };
// }

// let pr = prompt("name")
// let age = +prompt("age")
// let user = makeUser(pr, age)
// alert(`Name: ${user.name}, Age: ${user.age}`)

let inputName = document.getElementById("nameInput")
let inputAge = document.getElementById("ageInput")
let button= document.getElementById("button")
let result= document.getElementById("result")

let user = {}
function sendWithBtn(){

    button.addEventListener("click", (event) =>{
        event.preventDefault()
        const name = inputName.value.trim()
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        const age = inputAge.value.trim()

        if(!name || name.trim() === ""|| !isNaN(name)){
            result.textContent = `Укажите правильно имя!`
            result.style.color = "red"
        }else if(!age || age.trim() === ""|| isNaN(age) ){
            result.textContent = `Укажите ВОЗРАСТ`
            result.style.color = "red"

        } else {

            result.textContent = `Name - ${formattedName}\n Age - ${age}`
            result.style.color = "green"
            user.age = age
            user.name = name
            console.log(user)
            console.log("is worker" in user)
            for(const things in user){
                console.log(user[things])
            }
        }

    } )

}

sendWithBtn()