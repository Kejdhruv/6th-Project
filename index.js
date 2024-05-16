const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let slideInterval;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        startSlider();
    }
    
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
    clearInterval(slideInterval);
}
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
document.addEventListener('DOMContentLoaded', function () {
    initializeSlider();
});
function redirectTo(url) {
    window.location.href = url;
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#trend').onclick = function () {
        redirectTo('trending.html');
    };
    document.querySelector('#Men').onclick = function(){
        redirectTo('Collection.html?id=' + this.id)
    }
    document.querySelector('#Women').onclick = function(){
        redirectTo('Collection.html?id=' + this.id)
    }
    document.querySelector('#Kids').onclick = function(){
        redirectTo('Collection.html?id=' + this.id)
    }
    document.querySelector('#Accessories').onclick = function(){
        redirectTo('Collection.html?id=' + this.id)
    }
    document.querySelector('#cart').onclick = function(){
        redirectTo('cart.html') ; 

    }
    document.querySelector('.Admin').onclick = function(){
        redirectTo('admin.html') ; 
    }
    
}); 
