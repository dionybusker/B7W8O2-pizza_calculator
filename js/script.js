// pizzas array can be used

var txt;
console.log(txt)
for (var i = 0; i < pizzas.length; i++) {
    txt += '<li>' + pizzas[i].name + '</li>';
}


document.getElementById("pizzaList").innerHTML = txt;
