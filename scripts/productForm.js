const productForm = document.querySelector(".productForm");

productForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("name: ", productForm.name.value);
    console.log("price: ", productForm.price.value);
    console.log("size s: ", productForm.size_s.value);
    console.log("size m: ", productForm.size_m.value);
    console.log("size l: ", productForm.size_l.value);
    

    const product = {
        name: productForm.name.value,
        price: parseFloat(productForm.price.value),
        sizes: []
    };
    if(productForm.size_s.checked) product.sizes.push("s");
    if(productForm.size_s.checked) product.sizes.push("m");
    if(productForm.size_s.checked) product.sizes.push("l");
});