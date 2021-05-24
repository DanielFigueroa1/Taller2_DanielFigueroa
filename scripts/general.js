const firebaseConfig = {
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

  let loggedUser = null;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {

      db.collection("users").doc(user.uid).get().then(function (doc){
        loggedUser = doc.data();
        loggedUser.uid = user.uid;
        userAuthChanged(true);
        buttonsUsers.style.display = "none";

      });

      getMyCart(user.uid);

      } else {
        loggedUser = null;
        userAuthChanged(false);
        buttonsUsers.style.display = "flex";
        cart = [];
    }
  });

let cart = [];
const CART_COLLECTION = db.collection('cart');
const ORDERS_COLLECTION = db.collection('orders');

const addToMyCart = (product) => {
  cart.push(product);
  console.log("se agrego");
  CART_COLLECTION.doc(loggedUser.uid).set({
    cart,
  });
};

let renderCart = null;

const getMyCart = (uid) => {
  CART_COLLECTION.doc(uid).get().then(snapShot => {
    const data = snapShot.data();
    if(!data) return;
    cart = data.cart;
    if(renderCart) renderCart();
  });
}