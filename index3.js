import Data from "./data.js";

let cartItems = [];

if (localStorage.getItem('cartItems')) {
  cartItems = JSON.parse(localStorage.getItem('cartItems'));
}



Data.forEach((element) => {
  let id = element._id.match(/'([^']+)'/)[1];

  if (window.location.href.includes(id)) {
    let head = document.querySelector('.Heading');
    let description = document.querySelector('.Description');
    let img = document.querySelector('.Image');
    let aut = document.querySelector('.Price')
    head.textContent = element.mini;
    aut.textContent = ` M.R.P : $ ${element.price}`
    description.textContent = ` Description : ${element.descrip}`;
    img.style.backgroundImage = `url('${element.img}')`;

    let sliderImages = [element.img, element.img1, element.img2, element.img3, element.img4];
    let currentIndex = 0;

    function updateSliderImage() {
      img.style.backgroundImage = `url('${sliderImages[currentIndex]}')`;
    }

    function showNextImage() {
      currentIndex = (currentIndex + 1) % sliderImages.length;
      updateSliderImage();
    }

    img.addEventListener('click', showNextImage);
    let product = {
      id: id,
      name: element.mini,
      price: element.price ,
      img : element.img 
    };
    document.querySelector('.Bag1').addEventListener('click', () => addToCart(product));
    return;
  }
});

function addToCart(product) {
  product.s = selectedSize; // 
  cartItems.push(product);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert("Product added to cart!");
  console.log(cartItems);
}

function getCartItems() {
  return cartItems;
}

function redirectTo(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#cart').onclick = function () {
    redirectTo('cart.html');
  };
});
let selectedSize;

document.addEventListener('DOMContentLoaded', function () {
  const size = document.querySelector("#size");
  size.addEventListener("change", function () {
    selectedSize = size.value; 
    console.log("Selected size:", selectedSize);
  });
});
function Size() {
  return selectedSize ; 
}

export { Size ,  getCartItems };