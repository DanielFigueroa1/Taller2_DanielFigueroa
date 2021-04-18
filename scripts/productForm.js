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
  const storage = firebase.storage();

const productForm = document.querySelector(".productForm");

const productFormImg = document.querySelector(".productForm__img");

const shirtFields = document.querySelector(".shirtFields");

productForm.type.addEventListener("change",function(){
    console.log(productForm.type.value);
    shirtFields.classList.add("hidden");
    switch(productForm.type.value) {
        case "shirt":
            shirtFields.classList.remove("hidden");
            break; 
    
        case "sweater":
            shirtFields.classList.remove("hidden");
            break; 
    }
});

productForm.image.addEventListener("change", function (){ //esto hace que se pueda previsualizar la imagen despues de elegirla
    var reader = new FileReader();
    reader.onload = function(event) {
    productFormImg.classList.remove("hidden");
    productFormImg.setAttribute("src", event.target.result);
    //$('#blah').attr('src', e.target.result);
    }
    reader.readAsDataURL(productForm.image.files[0]); // convert to base64 string
});

productForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("name: ", productForm.name.value);
    console.log("type: ", productForm.type.value);
    console.log("price: ", productForm.price.value);
    console.log("size s: ", productForm.size_s.value);
    console.log("size m: ", productForm.size_m.value);
    console.log("size l: ", productForm.size_l.value);
    console.log("colorW: ", productForm.colorW.value);
    console.log("colorB: ", productForm.colorB.value);
    console.log("popularity: ", productForm.popularity.value);
    

    const product = {
        name: productForm.name.value,
        type: productForm.type.value,
        price: parseFloat(productForm.price.value),
        popularity: parseFloat(productForm.popularity.value)

    };

    switch(product.type){
        case "shirt":
            product.sizes = [];
            if(productForm.size_s.checked) product.sizes.push("s");
            if(productForm.size_m.checked) product.sizes.push("m");
            if(productForm.size_l.checked) product.sizes.push("l");
            product.color = [];
            if(productForm.colorW.checked) product.color.push("white");
            if(productForm.colorB.checked) product.color.push("black");
            break;
        case "sweater":
            product.sizes = [];
            if(productForm.size_s.checked) product.sizes.push("s");
            if(productForm.size_m.checked) product.sizes.push("m");
            if(productForm.size_l.checked) product.sizes.push("l");
            product.color = [];
            if(productForm.colorW.checked) product.color.push("white");
            if(productForm.colorB.checked) product.color.push("black");
    }
    //chequeo de que el producto tenga la variable pedida nombre, precio y tipo
    if(!productForm.name) return;
    if(!productForm.type) return;
    if(!productForm.price || product.price < 15000) return;
    if(!productForm.popularity || product.popularity <1 || product.popularity >5) return;

    //chequeo tamaños se comentan porque ahora estan solo para el caso de camisa y sueter
    //if(productForm.size_s.checked) product.sizes.push("s");
    //if(productForm.size_m.checked) product.sizes.push("m");
    //if(productForm.size_l.checked) product.sizes.push("l");
    //chequeo color
    //if(productForm.colorW.checked) product.color.push("white");
    //if(productForm.colorB.checked) product.color.push("black");

    
    const file = productForm.image.files[0];

    var storageRef = firebase.storage().ref();
    var fileRef = storageRef.child(`./Imagenes/${product.type}/${file.name}`); //ya solucionado

    fileRef.put(file).then(function(snapshot) {
        snapshot.ref,getDownloadURL().then((downloadURL) => {
            product.imageUrl = downloadURL;
            product.imageRef = snapshot.fullpath;
        })
    console.log('Uploaded a blob or file!');
    });

    console.log(product); //dice todo lo del producto en la consola
    console.log(productForm.image.files)
    //return; //debe quitarse esto para que se suba la info al firebase

    db.collection("products").add(product).then(function (docRef) {
        console.log("document added", docRef.id)
    });
});