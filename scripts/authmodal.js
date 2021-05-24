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
                    <input class="user" id="user" type="text" placeholder="User name" name="user">
                    <label class="modalLogin__frame__content__user" for="user">Correo</label>
                    <input class="email" id="email" type="email" placeholder="User e-mail" name="email">
                    <label class="modalRegister__frame__content__user" for="password">Contrasena</label>
                    <input class="password" id="password" type="password" placeholder="Password" name="password">
                    
                    <p class="productForm__error"></p>

                    <button type="submit" class="button__img">Confirmar</button>
                </form>
                </div>
            </section>
        </section>`;

document.body.appendChild(authModal);

const modalRegister = authModal.querySelector(".modalRegister");
const regFields = modalRegister.querySelectorAll(".modalRegister__regField");
const registerBtn = modalRegister.querySelector("modalRegister__register");
const modalError = modalRegister.querySelector("productForm__error");
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
    modalRegister.querySelector(".user").style.display= "block";
    modalRegister.style.display = "block";
});

openModalLogin.addEventListener("click", function (){
    isLogin = true;
    modalRegister.querySelector(".modalRegister__frame__content__user").style.display= "none"; //borrando los inputes de register que usuario no tiene
    modalRegister.querySelector(".user").style.display= "none";
    modalRegister.style.display = "block";
});

closeModal.addEventListener("click", function(){
    modalRegister.style.display= "none";
});

authModal.addEventListener("submit", function (event) { 
event.preventDefault();
console.log("submit") //prueba de funcionamiento button

const user = document.querySelector("#user").value;
const email = document.querySelector("#email").value;;
const password = document.querySelector("#password").value;;


if(isLogin) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
        console.log(error);
        //modalError.innerText = error.message; //problemas con el innertext preguntarle al monitor
    });
} else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        //signed in
        var userN = userCredential.user;
        console.log(userN);

        db.collection('users').doc(userN.uid).set({
        user,
        email: email,
        password: password,
        });
    })
    .catch((error) => {
        console.log(error);
        //modalError.innerText = error.message;
    });
}
});

const authButtons = document.querySelector(".authButtons");
authButtons.innerHTML = `

<button class="authButtons__edit hidden showLoggedAdmin"  > <a href="productForm.html">Editar catalogo</a> </button>

<button class="authButtons__logout hidden showLoggedIn"> Logout </button>
`;

const authEdit = document.querySelector(".authButtons__edit");
const authLogout = document.querySelector(".authButtons__logout");
const buttonsUsers = document.querySelector(".barraNavShop__login");


authLogout.addEventListener("click", function(){
    firebase.auth().signOut();
});