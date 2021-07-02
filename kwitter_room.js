var firebaseConfig = {
    apiKey: "AIzaSyAkSK9G1Qkn3cDbuWORBLaxMtbG-8nEsuA",
    authDomain: "raj-kwitter-app-34536.firebaseapp.com",
    databaseURL: "https://raj-kwitter-app-34536-default-rtdb.firebaseio.com",
    projectId: "raj-kwitter-app-34536",
    storageBucket: "raj-kwitter-app-34536.appspot.com",
    messagingSenderId: "147209843054",
    appId: "1:147209843054:web:fc5267ecb2769a5e34917f",
    measurementId: "G-S12087RJSQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
