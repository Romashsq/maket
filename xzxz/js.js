// const people = [
//     {name: "Roman", age: 18, hobbies: ["music", "reading", "travel"]},
//     {name: "Roman", age: 17, hobbies: ["coding", "games", "music"] },
//     {name: "Maria", age: 19, hobbies: ["sports", "travel", "movies"]},
//     { name: "Igor", age: 20, hobbies: ["coding", "reading", "chess"] }
// ]

// const askName = prompt("Enter your name")
// const askAbt = +prompt("Enter your age")
// const userHobbiesInput = prompt("Enter your hobbies")

// const userHobbies = userHobbiesInput.split(",").map(hob => hob.trim().toLocaleLowerCase())

// let bestMatch = null
// let similars = 0

// for(const person of people){
//   const common = person.hobbies.filter(hob => userHobbies.includes(hob.toLocaleLowerCase()))


//   if(common.length > similars){
//     similars = common.length
//     bestMatch = {name:person.name, age:person.age, hobbies: common,}
  
//   }
// }

// if(bestMatch){
//   alert(`The best similars with ${bestMatch.name}, Your similar interests ${bestMatch.hobbies.join(";")}`)
// } else {
  
// }




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
]



const enterName = prompt("Enter your name")
//categories
const categories = ["electronics", "clothes", "accessories", "furniture", "transport"];
const favCategoryInput = prompt("What category can I try to help you with?\n" + categories.join("\n"))
const favCategory = favCategoryInput.split(",").map(cat => cat.trim().toLocaleLowerCase())

//tags
const tagInput = prompt("Введите интерес (например: gaming, sport, music)");
const tags = tagInput.split(",").map(tag => tag.trim().toLocaleLowerCase())

//find tags and categories
let bestMatch = null
let interests = 0
let matches = []

// Перебираем массив клонясь к тому что выбрал пользователь
for(const product of products){
  
  if(favCategory.includes(product.category.toLocaleLowerCase())){

    const com = product.tags.filter(pr => tags.includes(pr.toLowerCase()))
    matches.push(product)
    if(com.length > interests){
    interests = com.length
    bestMatch = product
  }

}

}
//выводим 
if(bestMatch && interests > 3 ){
  alert(`We already found something for you! 
    Name: ${bestMatch.name}
    Category: ${bestMatch.category}
    Price: $${bestMatch.price}
    Tags: ${bestMatch.tags.join(", ")}
  `)
} else if(matches.length > 0){
  for(const product of matches){
    const confrimToContinue = confirm(
      `Name: ${product.name}\nCategory: ${product.category}\nPrice: $${product.price}\nTags: ${product.tags.join(", ")}\n---Would you want to continue?---`
    )
    if(!confrimToContinue){
      alert("Досвидание")
      break  
    }
  }
} 
else {
  alert("Sorry, no matches found 😔")
}