var firebaseConfig = {
    apiKey: "AIzaSyAO5HhU0O2osoi2ECI0ZJb8pQKbNQoHbdY",
    authDomain: "kidster-3af39.firebaseapp.com",
    projectId: "kidster-3af39",
    storageBucket: "kidster-3af39.appspot.com",
    messagingSenderId: "812653840073",
    appId: "1:812653840073:web:4f104ea73ada4883c5af18"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");