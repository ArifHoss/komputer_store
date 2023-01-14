const drinksElement = document.getElementById("drinks");
const priceElement = document.getElementById("price");
const addElement = document.getElementById("add");
const cartElement = document.getElementById("cart");
const totalDueElement = document.getElementById("totalDue");
const payElemnt = document.getElementById("pay");
const quantityElement = document.getElementById("quantity");

let drinks = [];
let cart = [];
let totalDue = 0.0;

fetch("https://my-json-server.typicode.com/SeanNoroff/drinks-api/drinks")
.then(response => response.json)
.then(data => drinks = data)
.then(drinks => addDrinksToMenu(drinks));

const addDrinksToMenu = (drinks)=>{
    drinks.foreach(x => addDrinkToMenu(x));
    priceElement.innerText = drinks[0].price;
}

const addDrinkToMenu =(drink) =>{
    const drinkElement = document.createElement("option");
    drinkElement.value = drink.id;
    drinkElement.appendChild(document.createTextNode(drink.description));
    drinksElement.appendChild(drinkElement);
}


const handleDrinkMenuChange = e => {
    const selectedDrink = drinks[e.target.selectedIndex];
    priceElement.innerText = selectedDrink.price;

    console.log("Hej")
}


drinksElement.addEventListener("change", handleDrinkMenuChange);
