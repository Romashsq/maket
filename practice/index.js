const resultEL =  document.getElementById('result');

const inputNum1 = document.getElementById("num1")
const inputNum2 = document.getElementById("num2")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const calcBtn = document.getElementById("calcBtn")
const result = document.getElementById("result")

let action = ""

plus.onclick = function () {
    action = "+"
}

minus.onclick = function () {
    action = "-"
}

multiply.onclick = function ( ) {
    action = "*"
}

divide.onclick = function ( ) {
    action = "/"
}

calcBtn.onclick = function () { 
    result.style.color = "black";
    if(action == "+" ){
        const sum =  Number(inputNum1.value) + Number(inputNum2.value) 
        result.textContent = sum
    } else if(action == "-" ){
        const sum  = Number(inputNum1.value) - Number(inputNum2.value) 
        result.textContent = sum
    } else if(action == "*" ){
        const sum  = Number(inputNum1.value) * Number(inputNum2.value) 
        result.textContent = sum
    } else if(action == "/"){
        if (Number(inputNum2.value ) === 0){
                result.style.color = "red";
                result.textContent = "НА 0 ДЕЛИТЬ НЕЛЬЗЯ!"
            } else {
                const sum  = Number(inputNum1.value) / Number(inputNum2.value) 
                result.textContent = sum
            }
            
    } 

    if (inputNum1.value.trim() === "" || inputNum2.value.trim() === "") {
        result.style.color = "red";
        result.textContent = "Заполни оба поля!";
        return;
    }

        
}

