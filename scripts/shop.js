const shop__leftArrow = document.querySelector(".imageNav__leftArrow"); //const no cambia, var si, referenciar la imagen
const navShop__frame__row__content = document.querySelector(".imageNav__content");
const shop__rightArrow = document.querySelector(".imageNav__rightArrow");

const list = document.querySelector(".list");

let imageNumberShop = 0; //inicio imagen contenido

/*shop__leftArrow.addEventListener("click", ()=>{

  if (imageNumberShop < 0){
      imageNumberShop = 4
  } else {
      imageNumberShop--;
  }
  
  manageImage();
  });

imageNav__content.addEventListener("click", ()=>{
  switch (imageNumberShop) {
      case 0:
      window.location.hash = "#shirts";
      break;
      case 1:
          window.location.hash = "#sweater";
          break;
      case 2:
          window.location.hash = "#sticker";
          break;
      case 3:
          window.location.hash = "#pin";
          break;
      case 4:
          window.location.hash = "#mugh";
      }
  }
)

shop__rightArrow.addEventListener("click", ()=>{

  if (imageNumberShop++ < 4){
      
  } else {
      imageNumberShop = 0;
  }
  
  manageImage();
  }); 

  function manageImage (){

    switch (imageNumberShop) {
        case 0:
          navShop__frame__row__content.setAttribute("src","./Imagenes/iconoIntroGrande");
        break;
        case 1:
          navShop__frame__row__content.setAttribute("src","./Imagenes/iconoIntroGrande2.png");
            break;
        case 2:
          navShop__frame__row__content.setAttribute("src","./Imagenes/iconoIntroGrande3.png");
            break;
        case 3:
          navShop__frame__row__content.setAttribute("src","./Imagenes/iconoIntroGrande4.png");
        case 4:
          navShop__frame__row__content.setAttribute("src","./Imagenes/iconoIntroGrande5.png");
    
    }

} //fin cambio de imagen nav}*/

console.log(loggedUser);

setTimeout(function (){
  console.log(loggedUser);
}, 2000);

const filterOptions = document.querySelector(".filterOptions");

const handleCollectionResult = (querySnapshot) => {
    document.querySelectorAll('.list').forEach(item => item.innerHTML = '');
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const product = document.createElement('div');
      product.innerHTML = `
        <div class="product" href="./product.html?id=${doc.id}&name=${data.name}">
        <img class="shirt__product__img" src="${data.URLimagen}" alt="">
        <div class="product__name">
            <h3> ${data.name}</h3>
            <h4 class ="product__price"> ${data.price}</h4>
            </div>
            <!--<p>${new Date(data.createdAt)}</p>-->
            </div>
            <button class="hidden showLoggedAdmin">Delete </button>
            <button class="product__cartBtn">add to cart</button>
        `;

      document.querySelector(`.list-${data.type}`).appendChild(product);

      const cartBtn = product.querySelector(".product__cartBtn");
      cartBtn.addEventListener("click", function () {
        addToMyCart({
          ...data,
          id:doc.id,
        })
      })
    });
  }

  const filters = document.querySelector('.filters');
filters.addEventListener('change', function () {
  let productsCollection = db.collection('products');

  const types = [];
  filters.productFilter.forEach(function (checkbox) {
    if(checkbox.checked) {
      types.push(checkbox.getAttribute('data-type'));
    }
  });

  if(types.length > 0){
    productsCollection = productsCollection.where('type', 'in', types);
  }

  if(filters.type.value) {
    productsCollection = productsCollection.where('type', '==', filters.type.value);
  }

  if(filters.price.value) {
    switch(filters.price.value) {
      case '0':
        productsCollection = productsCollection.where('price', '<', 20000);
        break;
      case '1':
        productsCollection = productsCollection.where('price', '<', 30000);
        break;
      case '2':
        productsCollection = productsCollection.where('price', '>=', 20000);
        break;
      case '3':
        productsCollection = productsCollection.where('price', '>=', 30000);
      break;
    }
  }

  if(filters.order.value) {
    switch(filters.order.value) {
      case 'price_asc':
        productsCollection = productsCollection.orderBy('price', 'asc');
        break;
      case 'price_desc':
        productsCollection = productsCollection.orderBy('price', 'desc');
        break;
    }
  }

  if(filters.popularity.value){
    switch(filters.popularity.value){
      case 'hola':
        productsCollection = productsCollection.orderBy('popularity', 'asc');
      break;

      case 'chao':
        productsCollection = productsCollection.orderBy('popularity', 'desc');
      break;
    }
  }

  productsCollection.get().then(handleCollectionResult);
});

let productsCollection = db.collection('products');

productsCollection.get().then(handleCollectionResult)

