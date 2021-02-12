// pizzas array can be used

for (var i = 0; i < pizzas.length; i++) {
    createList(pizzas[i].name);
}


// document.getElementById("pizzaList").innerHTML = txt;

function createList(name) {
    var list = document.createElement("li");
        list.innerHTML = name;

    document.getElementById("pizzaList").appendChild(list);
}



