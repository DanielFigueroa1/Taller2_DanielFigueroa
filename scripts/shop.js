db.collection("products")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const product = document.createElement("a");
            product.innerHTML = `
            <img class="product__img src="${item.img}" alt="">
            `;

        });
    })