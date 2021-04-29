const list = document.querySelector(".list");
let products = [{
    URLimagen: "https://firebasestorage.googleapis.com/v0/b/web-store-deadbehind.appspot.com/o/shirt%2FshirtSkullW.png?alt=media&token=5da89ba6-5cae-41c1-b380-298449106247",
    color: ["white", "black"],
    name: "Camisa Calavera",
    popularity: 5,
    price: 40000 ,
    sizes: ["s", "m", "l"],
    type: "shirt",
},
{
    /*URLimagen: "https://firebasestorage.googleapis.com/v0/b/web-store-deadbehind.appspot.com/o/shirt%2FshirtSkullW.png?alt=media&token=5da89ba6-5cae-41c1-b380-298449106247",
    color: ["white", "black"],
    name: "Camisa Calavera",
    popularity: 5,
    price: 40000 ,
    sizes: ["s", "m", "l"],
    type: "shirt",*/
}];

function printElements(data) {
    data.forEach(element => {
        const data = element;
        const product = document.createElement("a");
            product.innerHTML = `
            <img class="shirt__product__img" src="${data.URLimagen}" alt="">
            <div class="product__name">
                <h3> ${data.name}</h3>
                <h4 class ="product__price"> ${data.price}</h4>
                </div>
            `;
            product.classList.add("product");
            product.setAttribute("href","#")

            list.appendChild(product);
    });
}

printElements(products)
