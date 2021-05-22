const list = document.querySelector(".list");

const cart = [];
const cartBtnNumber = document.querySelector(".cartBtn span");

const cartFromLS = localStorage.getItem("store__cart");
if(cartFromLS) {
  cart = JSON.parse(cartFromLS);
}

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

      const cartBtn = document.querySelector("product__cartBtn");
      cartBtn.addEventListener("click", function () {
        cart.push(data);
        localStorage.setItem("store__cart",JSON.stringify(cart));
        cartBtnNumber.innerText = cart.length;
        console.log(cart.length, cartBtnNumber);
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

