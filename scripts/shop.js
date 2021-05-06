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

const modalLoginUser = document.querySelector(".modal-Login-User"); //inicio logi, no se hizo dinamico, esto para recordar todo lo que toca hacer por no hacerlo dinamico
const modalRegisterUser = document.querySelector(".modal-Register-User");
const modalLogin = document.querySelector(".modalLogin");
const modalRegister = document.querySelector(".modalRegister");
const loginCancel = modalLogin.querySelector(".modalLogin__frame__content__cancel")
const registerCancel = modalRegister.querySelector(".modalRegister__frame__content__cancel")

function handleOpenModal (){

    modalLogin.style.display = "block";
    document.body.style.overflow = "hidden";
    
}

function handleOpenModal2 (){

    modalRegister.style.display = "block";
    document.body.style.overflow = "hidden";
    
}

function handleCloseModal(){
    
        modalLogin.style.display = "none";
    
}

function handleCloseModal2(){
    
    modalRegister.style.display = "none";

}

loginCancel.addEventListener("click", handleCloseModal);
registerCancel.addEventListener("click", handleCloseModal2);

/*modalLoginUser.forEach(e => {
    e.addEventListener("click", handleOpenModal); //por cada elemento lo va a abrir
}); si fuera a hacer un modal desde la misma clase*/ 

modalLoginUser.addEventListener("click", handleOpenModal); //fin login
modalRegisterUser.addEventListener("click", handleOpenModal2);


