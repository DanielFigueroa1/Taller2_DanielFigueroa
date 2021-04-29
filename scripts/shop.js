const list = document.querySelector(".list");
let products = [{
    URLimagen: "https://firebasestorage.googleapis.com/v0/b/web-store-deadbehind.appspot.com/o/sweater%2FsweaterZombie2W.png?alt=media&token=801b6d13-c7f2-4117-b223-c8303d43a28d",
    color: ["white", "black"],
    name: "Sueter zombie 1",
    popularity: 5,
    price: 40000,
    sizes: ["s", "m", "l"],
    type: "sweater",
},
{
    
}];

function printElements(data) {
    data.forEach(element => {
        const data = element;
        const product = document.createElement("a");
            product.innerHTML = `
            <img class="product__image" src="${data.URLimagen}" alt="">
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
