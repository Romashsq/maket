

function askUser () {
    let user = {
    name: "...",
    age: "...",
    hobby: "..."
}
    while(true){
        

        alert("Привет заполни три поля перед тем  как зайти в магази!")

        let askFirst = prompt("Введи свое имя")
        if(askFirst === null || askFirst.trim() === "" || Number(askFirst)){
            alert("ВВЕДИ ИМЯ")
        } else {
            let askOneMoreTime = confirm(`Правильно ли ты ввел имя - ${askFirst} ?`)
            if(askOneMoreTime){
                user.name = askFirst
                
            }
        }

        let askSecond = prompt("Введи свой возраст")
        if (askSecond === null || askSecond.trim() === "" || isNaN(Number(askSecond))){
            alert("ВВЕДИ СВОЙ ВОЗРАСТ!")
        } else {
            let askOneMoreTime = confirm(`Правильно ли ты ввел возраст свой ${askSecond}?`)
            if(askOneMoreTime){
                user.age = askSecond
                break
            }
        }
        
    }
        
}

askUser()