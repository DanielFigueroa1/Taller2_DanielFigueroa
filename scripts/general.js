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

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  