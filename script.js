const products=[
    { title: "Apple iPhone 14", owner: "Apple Store", price: "$999", img: "7.png" },
    { title: "Nike Running Shoes", owner: "Nike", price: "$120", img: "8.webp" },
    { title: "Fruits & Veg Pack", owner: "Local Market", price: "$35", img: "3.jpeg" },
    { title: "Fitness Dumbbells", owner: "SportsPro", price: "$75", img: "4.avif" }
];

let currentIndex=0;

const productTitle = document.getElementById("product-title");
const productOwner = document.getElementById("product-owner");
const productPrice = document.getElementById("product-price");
const productImg = document.getElementById("product-img");

function showProduct(index){
    const product = products[index];
    productTitle.innerText = product.title;
    productOwner.innerText = product.owner;
    productPrice.innerText = product.price;
    productImg.style.backgroundImage = `url('${product.img}')`;
}

document.getElementById("next-btn").addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%products.length;
    showProduct(currentIndex);
});

document.getElementById("prev-btn").addEventListener("click",() =>{
    currentIndex=(currentIndex-1+products.length)%products.length;
    showProduct(currentIndex);
});

document.getElementById("add-to-cart").addEventListener("click",()=>{
    alert(products[currentIndex].title+" added to cart!");
});
showProduct(currentIndex);
