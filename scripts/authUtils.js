function userAuthChanged (loggedIn) {
    const showLoggedIn = document.querySelectorAll(".showLoggedIn") //Aqui iniciaria la funcion de ocultar los filtros 
    showLoggedIn.forEach(function (elem) {
        if(loggedIn){
            elem.classList.remove("hidden");
        } else {
            elem.classList.add("hidden");
        }
    });

    const hiddenLoggedIn = document.querySelectorAll("hideLoggedIn");
    hiddenLoggedIn.forEach(function(elem){
        if(loggedIn) {
            elem.classList.add("hidden");
        } else {
            elem.classList.remove("hidden");
        }
    });

        const showLoggedAdmin = document.querySelectorAll(".showLoggedAdmin");
        showLoggedAdmin.forEach(function (elem){
            if (loggedIn && loggedUser.admin) {
            elem.classList.remove("hidden");
            } else {
                elem.classList.add("hidden");
            }
        }); //preguntar en mi caso como se hace lo de que se cierra la ventana cuando algo se loggea
    

    
}

function userLoggedOut () {

}