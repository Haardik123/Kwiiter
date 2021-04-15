
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAM1r1f-6_EWaelsECE86rD8EhitFu-akE",
      authDomain: "kwitter-61232.firebaseapp.com",
      databaseURL: "https://kwitter-61232-default-rtdb.firebaseio.com",
      projectId: "kwitter-61232",
      storageBucket: "kwitter-61232.appspot.com",
      messagingSenderId: "964796910228",
      appId: "1:964796910228:web:c1cccde92f5f2b6e688281",
      measurementId: "G-5JL2BTKR84"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name-"+ Room_names);
       row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div> <hr>";
        
      //End code
      });});}
getData();
