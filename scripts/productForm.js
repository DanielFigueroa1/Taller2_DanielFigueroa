var firebaseConfig = {
    apiKey: "AIzaSyAmMYPMqf523SNFw2MbXPGdokIXwe-suN4",
    authDomain: "web-store-deadbehind.firebaseapp.com",
    projectId: "web-store-deadbehind",
    storageBucket: "web-store-deadbehind.appspot.com",
    messagingSenderId: "527773743903",
    appId: "1:527773743903:web:7b0dc4a81f6d15c98ace2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


const productForm = document.querySelector(".productForm");

productForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("name: ", productForm.name.value);
    console.log("price: ", productForm.price.value);
    console.log("size s: ", productForm.size_s.value);
    console.log("size m: ", productForm.size_m.value);
    console.log("size l: ", productForm.size_l.value);
    console.log("colorW: ", productForm.colorW.value);
    console.log("colorB: ", productForm.colorB.value);
    console.log("shirt: ", productForm.shirt.value);
    console.log("sweater: ", productForm.sweater.value);
    console.log("mug: ", productForm.mug.value);
    console.log("sticker: ", productForm.sticker.value);
    console.log("pin: ", productForm.pin.value);
    console.log("popularity: ", productForm.popularity.value);
    

    const product = {
        name: productForm.name.value,
        price: parseFloat(productForm.price.value),
        sizes: [],
        color: [],
        type: [],
        popularity: parseFloat(productForm.popularity.value)
    };
    //chequeo tamaños
    if(productForm.size_s.checked) product.sizes.push("s");
    if(productForm.size_m.checked) product.sizes.push("m");
    if(productForm.size_l.checked) product.sizes.push("l");

    //chequeo color
    if(productForm.colorW.checked) product.color.push("white");
    if(productForm.colorB.checked) product.color.push("black");
    //chequeo tipo de mercancia
    if(productForm.shirt.checked) product.type.push("camisa");
    if(productForm.sweater.checked) product.type.push("sweater");
    if(productForm.mug.checked) product.type.push("taza");
    if(productForm.sticker.checked) product.type.push("sticker");
    if(productForm.pin.checked) product.type.push("pin");

    console.log(product);

    db.collection("products").add(product).then(function () {
        console.log("document added", docRef.id)
    });
});