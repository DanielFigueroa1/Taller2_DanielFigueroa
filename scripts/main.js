const imageNav__leftArrow = document.querySelector(".imageNav__leftArrow"); //const no cambia, var si, referenciar la imagen
const imageNav__content = document.querySelector(".imageNav__content");
const imageNav__rightArrow = document.querySelector(".imageNav__rightArrow");
const announcement__image = document.querySelector(".announcement__image");
const announcement__imageButton = document.querySelector(".announcement__imageButton");

let zombie = document.querySelectorAll(".zombie")

let imageAnnouncement = 0;

let imageNumber = 0;
imageNav__leftArrow.addEventListener("click", ()=>{

    if (imageNumber < 0){
        imageNumber = 3
    } else {
        imageNumber--;
    }
    
    manageImage();
    }
);

announcement__imageButton.addEventListener("click", ()=>{

    if (imageAnnouncement < 1){
        imageAnnouncement = 0 
    } else {
        imageAnnouncement++;
    }

    hideImage();
});

imageNav__content.addEventListener("click", ()=>{
    switch (imageNumber) {
        case 0:
        window.location.hash = "#history";
        break;
        case 1:
            window.location.hash = "#about";
            break;
        case 2:
            window.location.hash = "#gallery";
            break;
        case 3:
            window.location.hash = "#support";
        }
    }
)

imageNav__rightArrow.addEventListener("click", ()=>{

    if (imageNumber++ < 3){
        
    } else {
        imageNumber = 0;
    }
    
    manageImage();
    }
);

function manageImage (){

    switch (imageNumber) {
        case 0:
        imageNav__content.setAttribute("src","./Imagenes/Iconointro0.png");
        break;
        case 1:
            imageNav__content.setAttribute("src","./Imagenes/Iconointro1.png");
            break;
        case 2:
            imageNav__content.setAttribute("src","./Imagenes/Iconointro2.png");
            break;
        case 3:
            imageNav__content.setAttribute("src","./Imagenes/Iconointro3.png");
    }

}

function hideImage (){
    switch (imageAnnouncement) {
        case 0:
            announcement__image.setAttribute("src","./Imagenes/announcement__image.png");
            announcement__imageButton.setAttribute("src","./Imagenes/announcement__imageButton.png"); 
            break;
            case 1:
                document.getElementById(announcement__image).style.display = 'none';
                document.getElementById(announcement__imageButton).style.display = 'none';

    }
}

document.addEventListener('click', function(e){

    console.log(e.target)

    let target = e.target;
    if(target.classList.contains ("zombie")){
        
        target.setAttribute("src","./Imagenes/cabezaZombie2.png");
    }
  });


