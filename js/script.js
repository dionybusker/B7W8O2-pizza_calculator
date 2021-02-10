// pizzas array can be used

var pizzaList = document.getElementById("pizzaList");

var li = document.createElement("li");
    li.setAttribute("id", "item");
    pizzaList.appendChild(li);

var item = document.getElementById("item");


console.log(item)

for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i].name)

    item.innerHTML = pizzas[i].name
}