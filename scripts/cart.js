const list = document.querySelector(".cartList");

let total = 0;

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
      total += data.price;
});
}