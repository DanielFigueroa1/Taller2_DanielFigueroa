
let total = 0;

const cartModal = document.createElement("section");
cartModal.classList.add("modal");


cartModal.innerHTML = `
<section class="modalRegister modalCart"> 
            <section class="modalRegister__frame">
                <div class="modalRegister__frame__content">
                    <img class="modalRegister__frame__content__cancel cancelCart" src="./Imagenes/publicidadCancel.png">

                <h1>Carrito de compras</h1>
                <div class="modalCart__container"></div>
                <h1>Total</h1>
                <h1 class="cartTotal"></h1>
                
                <button type="submit" class="button__img cartCheck">Confirmar</button>
                </div>
            </section>
        </section>`;

document.body.appendChild(cartModal);

const buttonCart = document.querySelector(".cartBtn");
const modalC = document.querySelector(".modalCart");

buttonCart.addEventListener("click", () => {
    modalC.style.display = "block";
    getMyCart(loggedUser.uid);
});

const listC = document.querySelector(".modalCart__container");
const totalP = document.querySelector(".cartTotal");
const closeModalC = document.querySelector(".cancelCart");
const cartCheck = document.querySelector(".cartCheck");


renderCart = () => {
    listC.innerHTML = "";
    total = 0;
    cart.forEach((data) => {
        const product = document.createElement("div");

        product.classList.add("product");
        product.innerHTML = `
        <img class="deleteProduct" width="40px" src="./Imagenes/publicidadCancel.png">
        <h3> ${data.name}</h3>
        <h3>${data.price}</h3>
        <h3>${new Date(data.createdAt)}</h3>
    `;
        listC.appendChild(product); //que ponga el producto en el container, el producto siendo un div
        total += data.price;
    });

    totalP.innerText = total;

}

closeModalC.addEventListener("click", function () {
    modalC.style.display = "none";
    
});

cartCheck.addEventListener("click", function () {
    const productIds = [];
    cart.forEach((data) => {
        productIds.push({id:data.id, name:data.name});
    });

    const order = {
        date: Date.now(),
        productIds: productIds,
        total: total,
        uid: loggedUser.uid,
    }

    ORDERS_COLLECTION.add(order)
        .then(function (docRef) {
            console.log(docRef.id);
            CART_COLLECTION.doc(loggedUser.uid).set({
                cart: []
            });
            modalC.style.display = "none";
            alert("Se envio la orden");
        });
        
});

