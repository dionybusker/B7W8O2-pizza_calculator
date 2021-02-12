// pizzas array can be used

const pizzaList = document.getElementById("pizzaList");

for (var i = 0; i < pizzas.length; i++) {
    createList(pizzas[i].name);
    /*
        pizzas[i].price
        pizzas[i].img
        pizzas[i].description

        bovenstaande kunnen ook gebruikt worden in createList()
        deze zullen dan in createList() ook nog juist aangemaakt moeten worden
    */
}



function createList(name) {
    var list = document.createElement("li");
    var btn = document.createElement("button");
        btn.setAttribute("class", "itemBtn");
        btn.innerHTML = name;

    list.appendChild(btn);
    pizzaList.appendChild(list);
}

const itemButtons = document.querySelectorAll(".itemBtn");
console.log(document.getElementsByClassName("itemBtn"));

itemButtons.forEach(element => {
    console.log(element)
    // element.onclick = myAlert();
});

function myAlert() {
    // alert(this.innerHTML)
    console.log(this.innerHTML);
}


console.log(itemButtons)
