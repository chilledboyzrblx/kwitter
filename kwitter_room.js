var firebaseConfig = {
      apiKey: "AIzaSyCmuRIEsBfWonXIxYqfSnWMERjZoQl9aI4",
      authDomain: "kwitter-chat-702a0.firebaseapp.com",
      databaseURL: "https://kwitter-chat-702a0-default-rtdb.firebaseio.com",
      projectId: "kwitter-chat-702a0",
      storageBucket: "kwitter-chat-702a0.appspot.com",
      messagingSenderId: "1031354822799",
      appId: "1:1031354822799:web:740f583a791bc4003a40fa",
      measurementId: "G-XPPKH9QS6W"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);
    var analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}