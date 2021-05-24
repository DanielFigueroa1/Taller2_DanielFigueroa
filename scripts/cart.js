
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
                <h2 class="cartTotal"></h2>
                
                <button type="submit" class="button__img">Confirmar</button>
                </div>
            </section>
        </section>`;

document.body.appendChild(cartModal);

const buttonCart = document.querySelector(".cartBtn");
const modalC = document.querySelector(".modalCart");

buttonCart.addEventListener("click", ()=> {
    modalC.style.display = "block";
    if(renderCart) renderCart();
});

const listC = document.querySelector(".modalCart__container");
const totalP = document.querySelector(".cartTotal");
const closeModalC = document.querySelector(".cancelCart");

renderCart = () => {
    cart.forEach((data) => {
    const product = document.createElement("div");
    
    product.classList.add("product");
    product.innerHTML = `
        <img class="modalRegister__frame__content__cancel deleteProduct" src="./Imagenes/publicidadCancel.png">
        <p> ${data.name}</p>
        <p>${data.price}</p>
        <p>${new Date(data.createdAt)}</p>
    `;
        listC.appendChild(product); //que ponga el producto en el container, el producto siendo un div
        total += data.price;
    });

    totalP.innerText = total;

}

closeModalC.addEventListener("click", function(){
    modalC.style.display= "none";
    listC.innerHTML = "";
});