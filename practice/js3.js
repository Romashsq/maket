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


const promptTag = prompt("Введи свой интерес")

const ArrPoTags = products.filter(product => product.tags.some(tag => tag.toLocaleLowerCase() === promptTag))

if(ArrPoTags.length === 0){
    alert("Мы не нашли подходящего для вас варианта!")
} else if(ArrPoTags.length > 0){
    let message = "Вот товары по вашему тегу"
    
    for(const product of ArrPoTags){

        message += `Название: ${product.name}\n`;
        message += `Категория: ${product.category}\n`;
        message += `Теги: ${product.tags.join(", ")}\n`;
        message += `Цена: $${product.price}\n`;
        message += "-------------------------\n";
    }

    alert(message)
}

// function price() {
//     let maxPrice = +prompt("Введи максимальную цену товара:");

//     const arrWithProducts = products.filter(product => product.price <= maxPrice);

//     if (arrWithProducts.length === 0) {
//         alert("Нет товаров");
//         return;
//     }

//     let message = "Вот список товаров по вашей цене:\n\n";
//     for (const product of arrWithProducts) {
//         message += `Название: ${product.name}\n`;
//         message += `Категория: ${product.category}\n`;
//         message += `Теги: ${product.tags.join(", ")}\n`;
//         message += `Цена: $${product.price}\n`;
//         message += "-------------------------\n";
//     }

//     alert(message);
// }

// price();




