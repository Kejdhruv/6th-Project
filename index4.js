import database from "./data2.js";

function redirectTo(url) {
    window.location.href = url;
}


let currentUrl = window.location.href;


let parts = currentUrl.split("?");
let queryString = parts[1];


let queryParams = queryString.split("&");

let Id;
for (let i = 0; i < queryParams.length; i++) {
    let param = queryParams[i].split("=");
    if (param[0] === "id") {
        Id = param[1];
        break; 
    }
}

console.log("ID extracted from URL:", Id);

database.forEach((element) => {


    if (Id === element.id) {
        let head = document.querySelector('.Head');
        let grid = document.querySelector('.Grid');
        head.textContent = element.Name;
        element.data.forEach((Element) => {
            let product = document.createElement('div');
            product.classList.add('product');
            grid.appendChild(product);

            let pimage = document.createElement('div');
            pimage.classList.add('pimage');
            product.appendChild(pimage);
            pimage.style.backgroundImage = "url('" + Element.img + "')";

            let Name = document.createElement('div');
            Name.classList.add('Name');
            product.appendChild(Name);
            Name.textContent = Element.name;

            product.addEventListener('click', function () {
                redirectTo('productpage.html?id=' + Element._id);
                ;
            });
        })
    }
});