// const { filter } = require("lodash");

const pizzaListTemplate = document.querySelector('.pizzaListTemplate');
const pizzas = document.querySelector('.pizzas');
const pizzaCount = document.querySelector('.pizzaCount');
const searchBox = document.querySelector('.searchBox');

// function to filter the data
const searchFilter = () => {
    const radioBtn = document.querySelector("input[type=radio]:checked")
    const filteredPizzas = pizzaList.filter(pizza => Object.values(pizza).find(prop => prop.startsWith(searchBox.value || "")))
    const sortedFilteredPizzas = filteredPizzas.sort((a,b) => {
        return radioBtn.value === "asc" ? (+a.price)-(+b.price) : (+b.price)-(+a.price)
    })
    showPizzas(sortedFilteredPizzas)
}

// function to display using handlebars
const showPizzas = array => {
    pizzaCount.innerHTML = array.length;    
    pizzas.innerHTML = Handlebars.compile(pizzaListTemplate.innerHTML)({pizzas: array})
}

// show by default
searchFilter()

// print all the pizzas in the list
searchBox.addEventListener("keyup", searchFilter)
document.querySelectorAll("input[type=radio]").forEach(radio => radio.addEventListener("click", searchFilter))

// const smallPizzaTotal = pizzaList.filter(obj => obj.size === 'small').map(obj => +obj.price).reduce((s,v) => s+v,0)

// console.log(smallPizzaTotal)