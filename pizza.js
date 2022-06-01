// const { filter } = require("lodash");

const pizzaListTemplate = document.querySelector('.pizzaListTemplate');
const pizzas = document.querySelector('.pizzas');
const pizzaCount = document.querySelector('.pizzaCount');
const searchBox = document.querySelector('.searchBox');

// console.log(pizzaList.length);
pizzaCount.innerHTML = pizzaList.length;

// print all the pizzas in the list