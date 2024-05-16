let Container1 = document.querySelector('.Container1');
function redirectTo(url) {
    window.location.href = url;
}
let Data = [
{
    "_id": "ObjectId('Item18')",
    "name": "Blue Denim",
    "price": "$20",

    "img": " https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff6%2F53%2Ff653b41896baa71b447543cb1eec8ce4e0225a00.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "descrip": "Engineering Physics offers a fundamental understanding of physical principles crucial for engineering applications. This comprehensive textbook covers topics including mechanics, thermodynamics, electromagnetism, and quantum mechanics, presenting them in a coherent and logical manner. With practical examples and real-world applications, students can grasp complex concepts and apply them to engineering problems. Authored by esteemed physicist V.K Jain, this book serves as an indispensable resource for engineering students aiming to build a strong foundation in physics for their future careers."
},
{
    "_id": "ObjectId('Item11')",
    "name": "Puffed Jacket",
    "price": "$35",
    
    "img": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2Fd1%2F80d1d7bfca8f02e68017e301e9f4dde278fcfdba.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "descrip": "Book overview. This book has been divided into seventeen chapters covering all the disciplines of engineering Chemistry such as Inorganic, Organic, synthetic, physical, applied, industrial, spectroscopic and Environmental Chemistry."
},
{
    "_id": "ObjectId('Item2')",
    "name": "Knitted Sweater",
    "price": "$22",
    
    "img": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd4%2F95%2Fd49535f6b93c01cfa9082ed3b51289abad028ae5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "descrip": "Engineering Biotechnology delves into the interdisciplinary field of biotechnology with a focus on engineering principles and applications. This cutting-edge textbook covers a wide range of topics including genetic engineering, biochemical engineering, bioprocess engineering, and biomanufacturing, providing students with a comprehensive understanding of the field. Through case studies and practical examples, readers will explore the integration of engineering techniques with biological systems to develop innovative solutions for healthcare, agriculture, and environmental sustainability. Authored by leading experts in the field, this book is essential for students and researchers seeking to leverage engineering principles for advancements in biotechnology."
},
{
    "_id": "ObjectId('Item3')",
    "name": "Oversized Hoodie",
    "price": "$18",
    
    "img": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F07%2F19%2F0719e9e6e6fc9bd337f0a69edc2880a98f84fcdb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "descrip": "Data Structures and Algorithms is an indispensable resource for computer science students and professionals alike. This comprehensive textbook covers fundamental concepts such as arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and hashing, providing a solid foundation in data organization and manipulation. With clear explanations, pseudocode, and implementation examples in various programming languages, readers can grasp complex algorithms and their applications in solving real-world problems efficiently. Authored by renowned experts in the field, this book equips readers with the knowledge and skills necessary for designing and analyzing efficient algorithms, making it an essential reference for anyone working in the field of computer science and software engineering."
},
{
    "_id": "ObjectId('Item4')",
    "name": "Blue Solid Tee",
    "price": "$12",
    
    "img": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3b%2F91%2F3b914a5a8beaa3bd3d29be6a0e96848e650ad4c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "descrip": "Discrete Mathematical Structures provides comprehensive, reasonably rigorous and simple explanation of the concepts with the help of numerous applications from computer science and engineering. Every chapter is equipped with a good number of solved examples that elucidates the definitions and theorems discussed."
}


];

Data.forEach((Element) => {
    var productCard = document.querySelector('.ProductCard');
    var product = document.createElement('div');
    product.classList.add('product');
    var Img = document.createElement('div');
    var name = document.createElement('div');
    name.classList.add('Name');
    Img.classList.add('pimage');
    product.appendChild(Img);
    product.appendChild(name);
    productCard.appendChild(product);
    name.innerHTML = Element.name;
    Img.style.backgroundImage = "url(' " + Element.img + " ')";
    product.setAttribute("id", Element._id);
    product.addEventListener('click', function () {
        redirectTo('productpage.html?id=' + Element._id);
        ;
    })
})

let Item = document.querySelector('.Item');
document.querySelectorAll('.items').forEach((item) => {
    item.addEventListener('click', function () {
        redirectTo('Collection.html?id=' + this.id);
    });
});
document.querySelector('#Contact').addEventListener('click' , function(){
    redirectTo('Contact.html') ; 
})