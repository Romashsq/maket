const products = [
  {name: "Laptop", category: "electronics", tags: ["work", "gaming", "study"], price: 1200},
  {name: "T-shirt", category: "clothes", tags: ["sport", "casual", "summer"], price: 25},
  {name: "Headphones", category: "electronics", tags: ["music", "gaming", "calls"], price: 150},
  {name: "Sneakers", category: "clothes", tags: ["sport", "running", "fashion"], price: 90},
  {name: "Smartphone", category: "electronics", tags: ["camera", "social", "gaming"], price: 800},
  {name: "Backpack", category: "accessories", tags: ["travel", "school", "sport"], price: 60},
  {name: "Watch", category: "accessories", tags: ["fashion", "business", "sport"], price: 200},
  {name: "Tablet", category: "electronics", tags: ["study", "reading", "gaming"], price: 500},
  {name: "Jacket", category: "clothes", tags: ["winter", "fashion", "casual"], price: 120},
  {name: "Gaming Chair", category: "furniture", tags: ["gaming", "comfort", "work"], price: 300},
  {name: "Bicycle", category: "transport", tags: ["sport", "eco", "travel"], price: 700},
  {name: "Camera", category: "electronics", tags: ["photo", "travel", "work"], price: 950}
];



function fixprice(){
    let enterPrice = +prompt("Введи прайс")
    while(enterPrice === 0 || isNaN(enterPrice)){
        let NoEnter = confirm("Ты ввел хуйню, хочешь продолжить")
        if(!NoEnter){
            alert("Иди нахуй")
            return
        }
        enterPrice = +prompt("Попробуй еще раз ввести прайс")

        const ArrWithCheapPrice = products.filter(product => product.price <= enterPrice)
        const FixBasePrice = products.filter(product => product.price >= enterPrice - 25 && product.price <= enterPrice + 25 )

        if(ArrWithCheapPrice.length > 0){
            let message = "Вот ваши товары"
            for(const product of ArrWithCheapPrice){

                
                message += `Название: ${product.name}\n`;
                message += `Категория: ${product.category}\n`;
                message += `Теги: ${product.tags.join(", ")}\n`;
                message += `Цена: $${product.price}\n`;
                message += "-------------------------\n";
            }
            alert(message)
        }
        if(FixBasePrice.length){
            let message = "Вот ваши товары"
            for(const product of FixBasePrice){

                
                message += `Название: ${product.name}\n`;
                message += `Категория: ${product.category}\n`;
                message += `Теги: ${product.tags.join(", ")}\n`;
                message += `Цена: $${product.price}\n`;
                message += "-------------------------\n";
            }
            alert(message)
        }
        break
    }
}

fixprice()