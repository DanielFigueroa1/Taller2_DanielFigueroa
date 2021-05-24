const checkoutModal = document.createElement("section");
checkOutModal.classList.add("modal");


checkoutModal.innerHTML = `
<section class="modalChekout"> 
            <section class="modalChekout__frame">
                <div class="modalChekout__frame__content">
                    <img class="modalChekout__frame__content__cancel" src="./Imagenes/publicidadCancel.png">
                    <h3>CheckOut</h3>
                    <section class="checkoutModal__list cartList"> </section>
        
                </div>
            </section>
        </section>`;

document.body.appendChild(checkoutModal);