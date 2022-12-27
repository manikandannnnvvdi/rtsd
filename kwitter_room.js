
var firebaseConfig = {
  apiKey: "AIzaSyAO5HhU0O2osoi2ECI0ZJb8pQKbNQoHbdY",
  authDomain: "kidster-3af39.firebaseapp.com",
  projectId: "kidster-3af39",
  storageBucket: "kidster-3af39.appspot.com",
  messagingSenderId: "812653840073",
  appId: "1:812653840073:web:4f104ea73ada4883c5af18"
};


  username= localStorage.getItem("user_name");
  console.log(user_name);
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function addroom(){
  roomnames= document.getElementById("roomname").value ;
  firebase.database().ref('/').child(roomnames).update({purpose:"adding roomnames"}) ;
  localStorage.setItem("room_name" ,roomnames);
  window.location="kwitter_page.html";
 }
 row ="<div class='room_name' id="+roomnames+"onclick='redirectToroomNmae(this.id)'>#"+roomnames+"</div> <hr>";
 function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomnames");
  window.location="index.html";
}
