const authModal = document.createElement("section");
authModal.classList.add("modal");


authModal.innerHTML = `
<section class="modalRegister"> 
            <section class="modalRegister__frame">
                <div class="modalRegister__frame__content">
                    <img class="modalRegister__frame__content__cancel" src="./Imagenes/publicidadCancel.png">
                <img src="./Imagenes/iconoUsuarioGrande.png">
                <form id="register">
                    <label class="modalRegister__frame__content__user" for="user">Usuario</label>
                    <input class="productForm__input" id="user" type="text" placeholder="User name" name="user">
                    <label class="modalLogin__frame__content__user" for="user">Correo</label>
                    <input class="productForm__input" id="email" type="text" placeholder="User e-mail" name="email">
                    <label class="modalRegister__frame__content__user" for="password">Contrasena</label>
                    <input class="productForm__input" id="password" type="password" placeholder="Password" name="password">
                    <button type="submit" class="button__img">Confirmar</button>
                </form>
                </div>
            </section>
        </section>`;

document.body.appendChild(authModal);

const modalRegister = authModal.querySelector(".modalRegister");
const regFields = modalRegister.querySelectorAll(".modalRegister__regField");
const registerBtn = modalRegister.querySelector("modalRegister__register");
let isLogin = true;

modalRegister.addEventListener("submit", function (event) { 
    event.preventDefault();
});

const openModalRegister = document.querySelector(".modal-Register-User");
const closeModal = document.querySelector(".modalRegister__frame__content__cancel");

const openModalLogin = document.querySelector(".modal-Login-User");


openModalRegister.addEventListener("click", function (){
    isLogin = false;
    modalRegister.querySelector(".modalRegister__frame__content__user").style.display= "block"; //borrando los inputes de register que usuario no tiene
    modalRegister.querySelector(".productForm__input").style.display= "block";
    modalRegister.style.display = "block";
});

openModalLogin.addEventListener("click", function (){
    isLogin = true;
    modalRegister.querySelector(".modalRegister__frame__content__user").style.display= "none"; //borrando los inputes de register que usuario no tiene
    modalRegister.querySelector(".productForm__input").style.display= "none";
    modalRegister.style.display = "block";
});

closeModal.addEventListener("click", function(){
    modalRegister.style.display= "none";
});

authModal.addEventListener("submit", function (event) { 
event.preventDefault();
console.log("submit") //prueba de funcionamiento button


const user = document.querySelector(".user");
const email = document.querySelector(".email");
const password = document.querySelector(".password")

if(isLogin) {

} else {
    firebaseConfig.auth().createUserEmailAndPassword(user, email, password)
    .then((userCredential) => {
        //signed in
        var user = userCredential.user;
        console.log(user);

        db.collection("users").doc(user.uid).set({
        user,
        email: email,
        password: password,
        });
    })
    .catch((error) => {
        console.log(error);
    });
}
});

