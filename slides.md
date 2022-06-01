---
# theme: gaia
size: 4:3
marp: true
---

List methods

> 5 Javascript list methods

---

# What is a JavaScript list?

What is a JavaScript List?

What can you do with it?


---

# Check-in

Name **3 methods** or attributes of JS lists.

--- 
# The five list methods

* forEach 
* map
* find 
* filter 
* reduce

---
# The five list methods

* forEach 
* map
* find 
* filter 
* reduce

What  does these methods have in common?

---

# They work `slightly`  differently

These  methods works differently...

They work by passing in functions.
The passed in functions are called by the methods.

---

# The `forEach` method.

The `forEach` method is an easy way to loop over a list.

It take a callback function as a parameter, that is called for each item in the list.

The current item in the list is passed to the function.
The item can be used in the function.

```javascript

pizzas.forEach(function(pizza){
	console.log(pizza);
});

```
---

# The `map` method.

The `map` method can be used to enrich/convert objects in a list.

It takes a callback function as a parameter: 
* that is called for each item in the list,
* the result of the callback function will be added to a new list.

> Discount all the medium pizzas by 15%;

```javascript
console.log(pizzas)
const cheaperMediumPizzas = pizzas.map(function(pizza){
	pizza.price = pizza.price * 0.85;
	return pizza;
});
console.log(cheaperMediumPizzas);

```

---

# The filter & find functions

The `find` & `filter` methods takes a `predicate` function as a parameter.

> `predicate` functions returns a boolean value `true/false`.

The `find` method returns one value - the **first entry** in **the list** for which the predicate **returns true**.

The `find` method returns many values - all the **entries** in **the list** for which the predicate **returns true**.

---

# Use `find`

Use find the find the price of the first Large pizza in the list.

```
const largePizza = pizzas.find(function(pizza){
	return pizza.size === 'large;
});
console.log(largePizza.price);
```
---

# Use `find`

You can also use it like this:

```

function isLarge(pizza){
	return pizza.size === 'large;
};
// find the first large pizza
const largePizzas = pizzas.find(isLarge);
console.log(largePizzas);

```

---

# Use `filter`

Use find the find all the large pizzas in the list.

```
const largePizzas = pizzas.filter(function(pizza){
	return pizza.size === 'large;
});

// find all the large pizzas
console.log(largePizzas);
```


---

# Use the `reduce` method

The `reduce` method can be used for many things. But in ensence it reduce many values into fewer values,

It takes at least 2 parameters:

	* a callback function,
	* and an initial value to start working with.

You can use it to calculate something like this:

> what is the total sales for small pizzas?

> what is the total sales for small, medium & large pizzas.

---

# The five list methods

* forEach - `loop over each item`
* map - `loop over each item and transform`
* find - `return first item that match predicate`
* filter - `return all items that match predicate`
* reduce - `visit each item in the list and return new result`

---

# Use them

You can use `find`, `filter`, `map` and `reduce` with the DOM to create interactive widgets.

The can filter & shape data. It can also be used to calculate and analyze.


