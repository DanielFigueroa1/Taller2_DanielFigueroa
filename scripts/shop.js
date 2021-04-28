db.collection("products")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data();
            const product = document.createElement("a");
            product.innerHTML = `
            <img class="product__img src="${data.imgages[0].url}" alt="">
            <div class="producto__info">
                <h3>
                    ${data.name}
                </h3>
                <h4 class ="product__price"> ${data.price}</h3>
                </div>
            `;
            product.classList.add("product");
            product.setAttribute("href","#")

            list.appendChild(product);

        });
    })