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
      });

      } else {
        loggedUser = null;
        userAuthChanged(false);
    }
  });
  