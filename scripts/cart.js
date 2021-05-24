const list = document.querySelector(".cartList");

let total = 0;

const cartModal = document.createElement("section");
cartModal.classList.add("modal");


cartModal.innerHTML = `
<section class="modalRegister modalCart"> 
            <section class="modalRegister__frame">
                <div class="modalRegister__frame__content modalCart__container">
                    <img class="modalRegister__frame__content__cancel" src="./Imagenes/publicidadCancel.png">

                
                
                </div>
            </section>
        </section>`;

document.body.appendChild(cartModal);

const buttonCart = document.querySelector(".cartBtn");
const modalC = document.querySelector(".modalCart");

button