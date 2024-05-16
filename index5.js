import { Size ,  getCartItems } from "./index3.js";

let cartItems = getCartItems();
console.log(cartItems) ; 

const s = Size();
Size(function() {
    console.log("Selected size:", Size);
});

let totalPrice = 0;
let totalQuantity = 0;

cartItems.forEach((element) => {
    totalPrice += parseFloat(element.price);
    totalQuantity++;
});

let actual = document.getElementById("#actual");
let shipping = document.getElementById('shipping');
let totalElement = document.getElementById("total");

let ship = 0.1 * totalPrice.toFixed(2);
if (ship > 50) {
    ship = 0;
}
actual= "2" ; 
actual.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
shipping.innerText = `Shipping: $${ship.toFixed(2)}`;
let total = parseFloat(totalPrice.toFixed(2)) + parseFloat(ship.toFixed(2));
totalElement.innerText = `Total: $${total.toFixed(2)}`;
let ul = document.querySelector("ul");

cartItems.forEach((Element) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let btn1 = document.createElement("button");
    li.classList.add("Li");
    ul.appendChild(li);
    let Img = document.createElement("div");
    let Name = document.createElement("div");
    let price = document.createElement("div");
    let name = document.createElement("div");
    li.appendChild(btn);
    li.appendChild(btn1);
    btn1.classList.add("btn1");
    btn.classList.add("btn");
    li.appendChild(Img);
    li.appendChild(Name);
    Name.appendChild(name);
    Name.appendChild(price);
    name.classList.add("name");
    price.classList.add("Price");
    price.textContent = ` M.R.P : $ ${Element.price}`;
    Img.classList.add("Image");
    Name.classList.add("Name");
    Img.style.backgroundImage = `url('${Element.img}')`;
    name.textContent = Element.name;
    btn.textContent = "Remove";
    btn1.textContent = JSON.stringify(s);
    btn.addEventListener("click", () => {
        const index = cartItems.findIndex((item) => item.id === Element.id);
        if (index !== -1) {
            cartItems.splice(index, 1);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            totalPrice -= parseFloat(Element.price);
            totalQuantity--;
            ul.removeChild(li);
        }
    });
});
let orders = [] ; 
let btn = document.querySelector("#checkout") ; 
btn.addEventListener("click" , exporder ) ;
function exporder() {
orders.push(cartItems) 
if (localStorage.getItem('orders')) {
    cartItems = JSON.parse(localStorage.getItem('orders'));
  }
  ; 
ul.innerHTML = "Thanks For Shopping "
 ; 
}
console.log(orders) ;  
function getorder(){
return orders ; 
}
function my_pain(){
    return cartItems;
}
export const fuck = 7 ; 
function redirectTo(url) {
    window.location.href = url;
}
export const me = 9;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#checkout').onclick = function () {
        redirectTo('my_pain.html');
    };
   
    
}); 