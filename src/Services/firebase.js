
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD1bZUoyDy_Js9AZMbETyf47P8dS_kKQ1k",
    authDomain: "webapp-dc077.firebaseapp.com",
    databaseURL: "https://webapp-dc077.firebaseio.com",
    projectId: "webapp-dc077",
    storageBucket: "webapp-dc077.appspot.com",
    messagingSenderId: "814809813678",
    appId: "1:814809813678:web:fdc602293755ba3b7dd33f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;