const list = document.querySelector(".list");

const filterOptions = document.querySelector(".filterOptions");

let products = [{
    URLimagen: "https://firebasestorage.googleapis.com/v0/b/web-store-deadbehind.appspot.com/o/shirt%2FshirtSkullW.png?alt=media&token=5da89ba6-5cae-41c1-b380-298449106247",
    color: ["white", "black"],
    name: "Camisa Calavera",
    popularity: 3,
    price: 30000,
    sizes: ["s", "m", "l"],
    type: "shirt",
},
{
    URLimagen: "https://firebasestorage.googleapis.com/v0/b/web-store-deadbehind.appspot.com/o/shirt%2FshirtCatW.png?alt=media&token=36c12614-4c37-4606-95b6-cc38df2f7ec4",
    color: ["white", "black"],
    name: "Camisa Gato",
    popularity: 4,
    price: 25000,
    sizes: ["s", "m", "l"],
    type: "shirt",
},
{
    URLimagen: "https://firebasestorage.googleapis.com/v0/b/web-store-deadbehind.appspot.com/o/sweater%2FsweaterZombieW.png?alt=media&token=1c4303d5-81a8-481c-ae70-c2341a0d3f19",
    color: ["white", "black"],
    name: "Sueter Cabeza <br>Zombie 1",
    popularity: 5,
    price: 40000,
    sizes: ["s", "m", "l"],
    type: "sweater",
}];




function printElements(data) {
    data.forEach(element => {
        const data = element;
        const product = document.createElement("a"); //la a lo hace un link
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

printElements(products);

filterOptions.addEventListener("change", function (){ //inicio filtros
    console.log(filterOptions.type.value);

    db.collection("products")
    .where("type","==", filterOptions.type.value)
    .get()
    .then(handleCollectionResult);
});

