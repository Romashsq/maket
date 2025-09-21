const contentWrapper = document.querySelector(".content-cards")
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")

const films = [
    {
        id: 0,
        title: "Jhoan Weak 1",
        originalTitle: "Jhoan Weak 1",
        category: "Ection",
        link: 'check.html',
        rang: 7.8,
        image: "images/image2.jpg"
    },
    {
        id: 1,
        title: "Jhoan Weak 2",
        originalTitle: "Jhoan Weak 2",
        category: "Ection",
        link: 'check.html',
        rang: 7.8,
        image: "./images/image3.jpg"
    },
    {
        id: 2,
        title: "Jhoan Weak 3",
        originalTitle: "Jhoan Weak 3",
        category: "Ection",
        link: 'check.html',
        rang: 7.8,
        image: "./images/image1.jpg"
    }
]

const render = (array) => {
    contentWrapper.innerHTML = ""

    array.forEach((item) => {
        contentWrapper.insertAdjacentHTML("beforeend",
            `<div class="content-card-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="content-card-title">
                    <h5 class="card-main-title">${item.title}</h5>
                    <p class="content-card-description">${item.originalTitle}</p>
                    <p class="content-rang">Оценка - ${item.rang}</p>
                    <a href="${item.link}">
                        <button class="button-check">Перейти</button>
                    </a>
                </div>
            </div>`
        )
    })
}

searchButton.addEventListener("click", () => render(films.filter((item) => item.title.includes(searchInput.value))))

render(films)
